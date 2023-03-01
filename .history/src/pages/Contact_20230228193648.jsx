import React from "react"

export default function Contact() {
  return (
    <div>
      <div class="container mx-auto">
        <div class="grid-cols-3 p-20 space-y-2 bg-yellow-200 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full col-span-2 row-span-2 rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
        </div>
      </div>
      // ? OTHER ONE
      <div class="container mx-auto ">
        <section class="py-8 ">
          <div class="flex flex-wrap -mx-4">
            <div class="hidden md:block md:w-1/2 px-4">
              <div
                class="h-full w-full bg-cover rounded shadow-md"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/random/1280x720')",
                }}
              ></div>
            </div>
            <div class="md:w-1/2 h-auto">
              <div class="mb-8">
                <img
                  class="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
