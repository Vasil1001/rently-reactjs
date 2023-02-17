import React from "react"

export default function Offers() {
  return (
    <div class="max-w-full min-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full md:min-w-full sm:max-w-4xl">
      <h2 class="font-bold text-3xl">Example 1</h2>
      <div class="mt-4 grid sm:grid-flow-col gap-4">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
      <hr class="my-10" />
      <h2 class="font-bold text-3xl">Example 2</h2>
      <div class="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
      </div>
      <hr class="my-10" />
      <h2 class="font-bold text-3xl">Example 3</h2>
      <div class="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-12">
        <div class="box">1</div>
        <div class="box sm:col-span-2">2</div>
        <div class="box md:col-span-3">3</div>
        <div class="box sm:col-span-2 md:col-span-6">4</div>
      </div>
      Another way
      <div class="mt-4 grid gap-4 grid-cols-12">
        <div class="box col-span-6 sm:col-span-4 md:col-span-1">1</div>
        <div class="box col-span-6 sm:col-span-8 md:col-span-2">2</div>
        <div class="box col-span-6 sm:col-span-4 md:col-span-3">3</div>
        <div class="box col-span-6 sm:col-span-8 md:col-span-6">4</div>
      </div>
    </div>
  )
}
