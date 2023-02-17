import React from "react"

export default function Offers() {
  return (
    <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-12">
      <div class="box">1</div>
      <div class="box sm:col-span-2">2</div>
      <div class="box md:col-span-3">3</div>
      <div class="box sm:col-span-2 md:col-span-6">4</div>
    </div>
  )
}
