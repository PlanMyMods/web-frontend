<template>
    <div class="flex flex-col dark:bg-gray-900 h-screen w-full overflow-y-auto">
        <section className="bg-white dark:bg-gray-900  ">
            <div className="items-center px-5 mx-auto max-w-screen-2xl ">
                <slot>Content</slot>
            </div>
        </section>
    </div>
</template>

<script>
</script>