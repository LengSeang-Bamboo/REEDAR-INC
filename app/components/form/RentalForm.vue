
<template>
    <div class="w-full px-4  pb-6">
        <h2
            class="text-white text-[4rem]"
        >
            Rent a Car for Every Journey
        </h2>
        <div 
            class="w-full bg-white border-0 rounded-md shadow-none item-center px-4"
        >
            <div class="min-w-full h-48 flex flex-row justify-between items-center">
                <div class="m-2 w-full">
                    <div class="flex flex-row justify-between text-black mb-2">
                        <h2>Depature</h2>
                        <div class="flex flex-row gap-4">
                            <p>Round trip?</p>
                            <USwitch 
                                v-model="isRoundTrip" 
                                size="md"
                                variant="outline"
                                color="secondary"
                                activeVariant="solid"
                            />
                            
                        </div>
                    </div>
                    <USelectMenu 
                        icon="lucide:map-pin"   
                        class="min-w-full h-14 bg-gray-200 text-black border-0 ring-0 "
                        trailing-icon="lucide:arrow-big-down"
                        v-model="departure" 
                        :items="locations"
                        value-key="id"  
                        label-key="name"    
                        size="lg"
                        placeholder="Select Depature"
                    />
                </div>  
                <div class="m-2 w-full">        
                    <div class="flex justify-between text-black mb-2">
                        <h2>Return Location</h2>
                    </div>
                    <USelectMenu 
                        icon="lucide:map-pin"
                        class="min-w-full h-14 bg-gray-200 text-black border-0 ring-0 "
                        trailing-icon="lucide:arrow-big-down"
                        v-model="returnLocation" 
                        :items="filteredReturnLocations"
                        value-key="id"   
                        label-key = 'name'   
                        size="lg"
                        :disabled="!isRoundTrip"
                        placeholder='Select return'
                    />
                </div> 
                <div class="m-2 w-full">
                    <div class="flex justify-between text-black mb-2">
                        <h2>Pick Up Date & Time</h2>
                    </div>
                        <UPopover>
                            <template #default>
                                <div class="flex items-center gap-2">
                                    <UInput ref="pickUpInput" v-model="pickUpDisplay" readonly class="min-w-full h-14 bg-gray-200 text-black border-0 ring-0" size="lg" />
                                    <UButton
                                        color="neutral"
                                        variant="link"
                                        size="sm"
                                        icon="i-lucide-calendar"
                                        aria-label="Select a date"
                                        class="px-0"
                                    />
                                </div>
                            </template>

                            <template #content>
                                <UCalendar v-model="pickUpModel" class="p-2" />
                            </template>
                        </UPopover>
                </div>

                <div class="m-2 w-full">
                    <div class="flex justify-between text-black mb-2">
                        <h2>Return Date & Time</h2>
                    </div>
                        <template v-if="isRoundTrip">
                            <UPopover>
                                <template #default>
                                    <div class="flex items-center gap-2">
                                        <UInput ref="returnInput" v-model="returnDisplay" readonly class="min-w-full h-14 bg-gray-500 text-black border-0 ring-0" size="lg" />
                                        <UButton
                                            color="neutral"
                                            variant="link"
                                            size="sm"
                                            icon="i-lucide-calendar"
                                            aria-label="Select a date"
                                            class="px-0"
                                        />
                                    </div>
                                </template>

                                <template #content>
                                    <UCalendar v-model="returnModel" class="p-2" />
                                </template>
                            </UPopover>
                        </template>
                        <template v-else>
                            <UInput ref="returnInput" v-model="returnDisplay" disabled readonly class="min-w-full h-14 bg-gray-500 text-black border-0 ring-0" size="lg" />
                        </template>
                </div>
            </div>
            <div class="min-w-full h-12 pb-6 flex flex-row justify-between items-center">
                <div class="flex flex-row gap-4 h-10 justify-center items-center">
                    <p>Filter:</p>
                    <div class="flex bg-black rounded-2xl h-10 justify-center items-center">
                        <p class="text-white mx-2">Without Driver</p>
                    </div>
                    <div class="flex bg-white rounded-2xl h-10 justify-center items-center">
                        <p class="text-black mx-2">With Driver</p>
                    </div>
                </div>
                <UButton 
                    label="Search"
                    trailing-icon="i-lucide-arrow-right" 
                    size="xl" 
                    variant="solid" 
                    color="secondary"  
                    @click="submitSearch"
                />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import { CalendarDate } from '@internationalized/date'
import { ref, computed, shallowRef, useTemplateRef } from 'vue'
const pickUpInput = useTemplateRef('pickUpInput')
const pickUpModel = shallowRef(new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()))
const returnInput = useTemplateRef('returnInput')
const returnModel = shallowRef(new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()))
import { locations } from "~/data/locations";
import { navigateTo } from '#app'


const isRoundTrip = ref(true)
const departure = ref<number>()
const returnLocation = ref<number>()

const buildQuery = () => {
    const q: Record<string, string> = {}
    if (departure.value) q.departure = String(departure.value)
    if (returnLocation.value) q.return = String(returnLocation.value)
    if (pickUpModel.value) {
        const d = pickUpModel.value as any
        q.pickup = `${d.year}-${String(d.month).padStart(2, '0')}-${String(d.day).padStart(2, '0')}`
    }
    if (returnModel.value) {
        const d = returnModel.value as any
        q.returnDate = `${d.year}-${String(d.month).padStart(2, '0')}-${String(d.day).padStart(2, '0')}`
    }
    q.roundtrip = isRoundTrip.value ? '1' : '0'
    return new URLSearchParams(q).toString()
}

const submitSearch = () => {
    const qs = buildQuery()
    navigateTo(qs ? `/vehicles?${qs}` : '/vehicles')
}

const fmt = (d: any) => d ? `${d.year}-${String(d.month).padStart(2, '0')}-${String(d.day).padStart(2, '0')}` : ''

const parseDateString = (s: string) => {
    const m = s?.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (!m) return null
    const y = Number(m[1]), mo = Number(m[2]), da = Number(m[3])
    return new CalendarDate(y, mo, da)
}

const pickUpDisplay = computed({
    get: () => fmt((pickUpModel.value as any)),
    set: (v: string) => {
        const p = parseDateString(v)
        if (p) pickUpModel.value = p
    }
})

const returnDisplay = computed({
    get: () => fmt((returnModel.value as any)),
    set: (v: string) => {
        const p = parseDateString(v)
        if (p) returnModel.value = p
    }
})

const filteredReturnLocations = computed(() =>
departure.value
    ? locations.filter(loc => loc.id !== Number(departure.value))
    : locations
)
</script>