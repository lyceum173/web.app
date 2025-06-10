<!-- <template>
    <aside class="lms-sidebar">
        <nav class="lms-sidebar__nav">
            <router-link class="lms-sidebar__nav__item" to="/teacher/dashboard"><svg xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" viewBox="0 0 24 24" fill="none" class="injected-svg"
                    data-src="https://cdn.hugeicons.com/icons/dashboard-square-03-stroke-rounded.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                    <path
                        d="M9.75 3H5.75C5.05222 3 4.70333 3 4.41943 3.08612C3.78023 3.28002 3.28002 3.78023 3.08612 4.41943C3 4.70333 3 5.05222 3 5.75C3 6.44778 3 6.79667 3.08612 7.08057C3.28002 7.71977 3.78023 8.21998 4.41943 8.41388C4.70333 8.5 5.05222 8.5 5.75 8.5H9.75C10.4478 8.5 10.7967 8.5 11.0806 8.41388C11.7198 8.21998 12.22 7.71977 12.4139 7.08057C12.5 6.79667 12.5 6.44778 12.5 5.75C12.5 5.05222 12.5 4.70333 12.4139 4.41943C12.22 3.78023 11.7198 3.28002 11.0806 3.08612C10.7967 3 10.4478 3 9.75 3Z"
                        stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path>
                    <path
                        d="M21 9.75V5.75C21 5.05222 21 4.70333 20.9139 4.41943C20.72 3.78023 20.2198 3.28002 19.5806 3.08612C19.2967 3 18.9478 3 18.25 3C17.5522 3 17.2033 3 16.9194 3.08612C16.2802 3.28002 15.78 3.78023 15.5861 4.41943C15.5 4.70333 15.5 5.05222 15.5 5.75V9.75C15.5 10.4478 15.5 10.7967 15.5861 11.0806C15.78 11.7198 16.2802 12.22 16.9194 12.4139C17.2033 12.5 17.5522 12.5 18.25 12.5C18.9478 12.5 19.2967 12.5 19.5806 12.4139C20.2198 12.22 20.72 11.7198 20.9139 11.0806C21 10.7967 21 10.4478 21 9.75Z"
                        stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path>
                    <path
                        d="M16.9194 20.9139C17.2033 21 17.5522 21 18.25 21C18.9478 21 19.2967 21 19.5806 20.9139C20.2198 20.72 20.72 20.2198 20.9139 19.5806C21 19.2967 21 18.9478 21 18.25C21 17.5522 21 17.2033 20.9139 16.9194C20.72 16.2802 20.2198 15.78 19.5806 15.5861C19.2967 15.5 18.9478 15.5 18.25 15.5C17.5522 15.5 17.2033 15.5 16.9194 15.5861C16.2802 15.78 15.78 16.2802 15.5861 16.9194C15.5 17.2033 15.5 17.5522 15.5 18.25C15.5 18.9478 15.5 19.2967 15.5861 19.5806C15.78 20.2198 16.2802 20.72 16.9194 20.9139Z"
                        stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path>
                    <path
                        d="M8.5 11.5H7C5.11438 11.5 4.17157 11.5 3.58579 12.0858C3 12.6716 3 13.6144 3 15.5V17C3 18.8856 3 19.8284 3.58579 20.4142C4.17157 21 5.11438 21 7 21H8.5C10.3856 21 11.3284 21 11.9142 20.4142C12.5 19.8284 12.5 18.8856 12.5 17V15.5C12.5 13.6144 12.5 12.6716 11.9142 12.0858C11.3284 11.5 10.3856 11.5 8.5 11.5Z"
                        stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path>
                </svg>
                <p>Огляд</p>
            </router-link>
            <router-link class="lms-sidebar__nav__item" to="/teacher/courses"><svg xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" viewBox="0 0 24 24" fill="none" class="injected-svg"
                    data-src="https://cdn.hugeicons.com/icons/libraries-stroke-standard.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                    <path
                        d="M6.5 4H3.5C2.94772 4 2.5 4.44772 2.5 5V19C2.5 19.5523 2.94772 20 3.5 20H6.5C7.05228 20 7.5 19.5523 7.5 19V5C7.5 4.44772 7.05228 4 6.5 4Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                    <path
                        d="M11.5 7H8.5C7.94772 7 7.5 7.44772 7.5 8V19C7.5 19.5523 7.94772 20 8.5 20H11.5C12.0523 20 12.5 19.5523 12.5 19V8C12.5 7.44772 12.0523 7 11.5 7Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                    <path
                        d="M16.7736 7.0724L13.6306 8.33505C13.1329 8.53497 12.8798 9.09237 13.0559 9.60059L16.4252 19.3237C16.6066 19.847 17.175 20.1249 17.6973 19.9455L20.8215 18.8723C21.3446 18.6926 21.6242 18.1218 21.4465 17.5962L18.0961 7.68366C17.9113 7.13703 17.3075 6.85794 16.7736 7.0724Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                </svg>
                <p>Курси</p>
            </router-link>
            <router-link class="lms-sidebar__nav__item" to="/teacher/courses"><svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg"
                    data-src="https://cdn.hugeicons.com/icons/zoom-stroke-sharp.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                    <path
                        d="M1.99786 14V6H10.9923C13.2001 6 14.9899 7.79086 14.9899 10V18H5.9954C3.78762 18 1.99786 16.2091 1.99786 14Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                        d="M21.9867 7.01435L17.4759 9.9695V14.0004L21.9866 16.9909C21.9933 16.9953 22.0022 16.9906 22.0022 16.9826V7.02271C22.0022 7.01476 21.9933 7.00999 21.9867 7.01435Z"
                        stroke="#000000" stroke-width="1.5"></path>
                </svg>
                <p>Уроки</p>
            </router-link>
            <router-link class="lms-sidebar__nav__item" to="/teacher/settings"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/settings-02-stroke-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="#000000" stroke-width="1.5"></path>
<path d="M22 13.9669V10.0332C19.1433 10.0332 17.2857 6.93041 18.732 4.46691L15.2679 2.5001C13.8038 4.99405 10.1978 4.99395 8.73363 2.5L5.26953 4.46681C6.71586 6.93035 4.85673 10.0332 2 10.0332V13.9669C4.85668 13.9669 6.71425 17.0697 5.26795 19.5332L8.73205 21.5C10.1969 19.0048 13.8046 19.0047 15.2695 21.4999L18.7336 19.5331C17.2874 17.0696 19.1434 13.9669 22 13.9669Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
                <p>Налаштування</p>
            </router-link>

        </nav>
    </aside>
</template> -->
<template>
        <button class="sidebar-mobile" @click="sidebarOpen = !sidebarOpen" :class="{open: sidebarOpen}">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/menu-two-line-solid-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path class="x-top" fill-rule="evenodd" clip-rule="evenodd" d="M3 9C3 8.44772 3.44772 8 4 8L20 8C20.5523 8 21 8.44772 21 9C21 9.55229 20.5523 10 20 10L4 10C3.44772 10 3 9.55228 3 9Z" fill="#bdccff "></path>
<path fill-rule="evenodd" class="x-bottom" clip-rule="evenodd" d="M3 15C3 14.4477 3.44772 14 4 14L14 14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16L4 16C3.44772 16 3 15.5523 3 15Z" fill="#bdccff "></path>
</svg>
  </button>   
    <aside class="lms-sidebar" :class="{open: sidebarOpen}">
        
        <br class="mobile">
        <br class="mobile">
        <br class="mobile">
      <nav class="lms-sidebar__nav">
        <!-- Main Link -->
        <router-link class="lms-sidebar__nav-item" to="/teacher/dashboard">
            <svg xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" viewBox="0 0 24 24" fill="none" class="injected-svg"
                    data-src="https://cdn.hugeicons.com/icons/dashboard-square-03-stroke-rounded.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                    <path
                        d="M9.75 3H5.75C5.05222 3 4.70333 3 4.41943 3.08612C3.78023 3.28002 3.28002 3.78023 3.08612 4.41943C3 4.70333 3 5.05222 3 5.75C3 6.44778 3 6.79667 3.08612 7.08057C3.28002 7.71977 3.78023 8.21998 4.41943 8.41388C4.70333 8.5 5.05222 8.5 5.75 8.5H9.75C10.4478 8.5 10.7967 8.5 11.0806 8.41388C11.7198 8.21998 12.22 7.71977 12.4139 7.08057C12.5 6.79667 12.5 6.44778 12.5 5.75C12.5 5.05222 12.5 4.70333 12.4139 4.41943C12.22 3.78023 11.7198 3.28002 11.0806 3.08612C10.7967 3 10.4478 3 9.75 3Z"
                        stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path>
                    <path
                        d="M21 9.75V5.75C21 5.05222 21 4.70333 20.9139 4.41943C20.72 3.78023 20.2198 3.28002 19.5806 3.08612C19.2967 3 18.9478 3 18.25 3C17.5522 3 17.2033 3 16.9194 3.08612C16.2802 3.28002 15.78 3.78023 15.5861 4.41943C15.5 4.70333 15.5 5.05222 15.5 5.75V9.75C15.5 10.4478 15.5 10.7967 15.5861 11.0806C15.78 11.7198 16.2802 12.22 16.9194 12.4139C17.2033 12.5 17.5522 12.5 18.25 12.5C18.9478 12.5 19.2967 12.5 19.5806 12.4139C20.2198 12.22 20.72 11.7198 20.9139 11.0806C21 10.7967 21 10.4478 21 9.75Z"
                        stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path>
                    <path
                        d="M16.9194 20.9139C17.2033 21 17.5522 21 18.25 21C18.9478 21 19.2967 21 19.5806 20.9139C20.2198 20.72 20.72 20.2198 20.9139 19.5806C21 19.2967 21 18.9478 21 18.25C21 17.5522 21 17.2033 20.9139 16.9194C20.72 16.2802 20.2198 15.78 19.5806 15.5861C19.2967 15.5 18.9478 15.5 18.25 15.5C17.5522 15.5 17.2033 15.5 16.9194 15.5861C16.2802 15.78 15.78 16.2802 15.5861 16.9194C15.5 17.2033 15.5 17.5522 15.5 18.25C15.5 18.9478 15.5 19.2967 15.5861 19.5806C15.78 20.2198 16.2802 20.72 16.9194 20.9139Z"
                        stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path>
                    <path
                        d="M8.5 11.5H7C5.11438 11.5 4.17157 11.5 3.58579 12.0858C3 12.6716 3 13.6144 3 15.5V17C3 18.8856 3 19.8284 3.58579 20.4142C4.17157 21 5.11438 21 7 21H8.5C10.3856 21 11.3284 21 11.9142 20.4142C12.5 19.8284 12.5 18.8856 12.5 17V15.5C12.5 13.6144 12.5 12.6716 11.9142 12.0858C11.3284 11.5 10.3856 11.5 8.5 11.5Z"
                        stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path>
                </svg>
          <p>Огляд</p>
        </router-link>
  
        <!-- Courses with sub-links -->
        <details class="lms-sidebar__group" :open="$route.path.startsWith('/teacher/courses')">
          <summary class="lms-sidebar__nav-item">
            <svg xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" viewBox="0 0 24 24" fill="none" class="injected-svg"
                    data-src="https://cdn.hugeicons.com/icons/libraries-stroke-standard.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                    <path
                        d="M6.5 4H3.5C2.94772 4 2.5 4.44772 2.5 5V19C2.5 19.5523 2.94772 20 3.5 20H6.5C7.05228 20 7.5 19.5523 7.5 19V5C7.5 4.44772 7.05228 4 6.5 4Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                    <path
                        d="M11.5 7H8.5C7.94772 7 7.5 7.44772 7.5 8V19C7.5 19.5523 7.94772 20 8.5 20H11.5C12.0523 20 12.5 19.5523 12.5 19V8C12.5 7.44772 12.0523 7 11.5 7Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                    <path
                        d="M16.7736 7.0724L13.6306 8.33505C13.1329 8.53497 12.8798 9.09237 13.0559 9.60059L16.4252 19.3237C16.6066 19.847 17.175 20.1249 17.6973 19.9455L20.8215 18.8723C21.3446 18.6926 21.6242 18.1218 21.4465 17.5962L18.0961 7.68366C17.9113 7.13703 17.3075 6.85794 16.7736 7.0724Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                </svg>
            <p>Курси</p>
            <svg xmlns="http://www.w3.org/2000/svg"width="20" height="20" viewBox="0 0 24 24" fill="none" class="injected-svg lms-sidebar__nav-item__arrow" data-src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path d="M9.00005 6L15 12L9 18" stroke="#B3B3B3FF" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
          </summary>
          <div class="lms-sidebar__group-list">
            <router-link to="/teacher/courses/all" class="lms-sidebar__nav__subitem">Усі курси</router-link>
            <router-link to="/teacher/courses/create" class="lms-sidebar__nav__subitem">Створити курс</router-link>
          </div>
          
        </details>
        <details class="lms-sidebar__group" :open="$route.path.startsWith('/teacher/nmt')">
          <summary class="lms-sidebar__nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/diploma-stroke-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path d="M14 14.5C14 15.8807 12.8807 17 11.5 17C10.1193 17 9 15.8807 9 14.5C9 13.1193 10.1193 12 11.5 12C12.8807 12 14 13.1193 14 14.5Z" stroke="#000000" stroke-width="1.5"></path>
<path d="M9 14.5C9 18.5 10.7222 20.8706 11.5 22L13 19L16.5 21C15.7653 20.2888 15.0058 18.0471 15.0058 18.0471" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M19 18.9884V18.9884C20.6569 18.9884 22 17.6453 22 15.9884V6C22 4.34314 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6V15.9961C2 17.65 3.33845 18.9919 4.99228 18.9961L6.5 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M16.5 8H7.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
            <p>НМТ</p>
            <svg xmlns="http://www.w3.org/2000/svg"width="20" height="20" viewBox="0 0 24 24" fill="none" class="injected-svg lms-sidebar__nav-item__arrow" data-src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path d="M9.00005 6L15 12L9 18" stroke="#B3B3B3FF" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
          </summary>
          <div class="lms-sidebar__group-list">
            <router-link to="/teacher/nmt/" class="lms-sidebar__nav__subitem">Усі тести</router-link>
            <router-link to="/teacher/courses/create" class="lms-sidebar__nav__subitem">Створити курс</router-link>
          </div>
          
        </details>

        <router-link class="lms-sidebar__nav-item" to="/teacher/settings">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/settings-02-stroke-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="#000000" stroke-width="1.5"></path>
<path d="M22 13.9669V10.0332C19.1433 10.0332 17.2857 6.93041 18.732 4.46691L15.2679 2.5001C13.8038 4.99405 10.1978 4.99395 8.73363 2.5L5.26953 4.46681C6.71586 6.93035 4.85673 10.0332 2 10.0332V13.9669C4.85668 13.9669 6.71425 17.0697 5.26795 19.5332L8.73205 21.5C10.1969 19.0048 13.8046 19.0047 15.2695 21.4999L18.7336 19.5331C17.2874 17.0696 19.1434 13.9669 22 13.9669Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
          <p>Налаштування</p>
        </router-link>
        <router-link class="lms-sidebar__nav-item" to="/teacher/settings">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/customer-support-stroke-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path d="M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M19 17V19C19 20.1046 18.1046 21 17 21H12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M4.10496 9.59854L2.4458 10.7032C2.16731 10.8886 2 11.201 2 11.5356V14.4644C2 14.799 2.16731 15.1114 2.4458 15.2968L4.10496 16.4015C4.66094 16.7716 5.37255 16.8158 5.97002 16.5172C6.60124 16.2017 7 15.5566 7 14.851V11.149C7 10.4434 6.60124 9.7983 5.97002 9.48283C5.37255 9.18422 4.66094 9.22837 4.10496 9.59854Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M18.03 9.48283C18.6274 9.18422 19.3391 9.22837 19.895 9.59854L21.5542 10.7032C21.8327 10.8886 22 11.201 22 11.5356V14.4644C22 14.799 21.8327 15.1114 21.5542 15.2968L19.895 16.4015C19.3391 16.7716 18.6274 16.8158 18.03 16.5172V16.5172C17.3988 16.2017 17 15.5566 17 14.851V11.149C17 10.4434 17.3988 9.7983 18.03 9.48283V9.48283Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<p>Підтримка</p>
        </router-link>
      </nav>
    </aside>
  </template>
  <script setup >
import { ref } from 'vue';

const sidebarOpen = ref(false)
</script>
<style>
.lms-sidebar {
    background-color: rgb(255, 255, 255);
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    position: sticky !important;
    top: 4.5rem;
    height: min-content !important;
    /* min-height: calc(100dvh  - 56px - 2rem); */
}

.lms-sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.lms-sidebar__nav-item {
    width: 100% !important;
    display: flex !important;
    flex-direction: row !important;
    gap: 0.25rem;
    align-items: center;
    padding: 0.5rem;
    z-index: 1000;
    border-radius: 0.25rem;
}
.lms-sidebar__nav-item.submenu {
    display: flex;
    flex-direction: column;
}
.lms-sidebar__group {
    z-index: 10000; 
  display: flex !important;
  flex-direction: column !important;
}
.lms-sidebar__group a {
    width: 100%;
}
.lms-sidebar__group summary {
  list-style: none;
  cursor: pointer;
}
details[open] summary ~ * {
  animation: sweep .5s ease-in-out;
}
details {
    animation: height-out 1s forwards !important;
    overflow: hidden;

}
details[open] {
    height: 0;
    animation: height 1s forwards;

}
.lms-sidebar__nav-item__arrow {
    transition: all 0.5s;
    justify-self: end;
    margin-left: auto;
}
details[open] .lms-sidebar__nav-item__arrow {
    transform: rotate(90deg);

    & * {
        stroke-width: 1px;
    }
    
}

@keyframes height {
    0% {
        height: 32px;
    } 100% {
        height: 100%;
    }
}
@keyframes height-out {
    0% {
        height: 100%;
    } 100% {
        height: auto;
    }
}
@keyframes sweep {
  0%    {opacity: 0; margin-top: -50%}
  100%  {opacity: 1; margin-top: 0px}
}
.lms-sidebar__nav__subitem {
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  width: 100% !important;
  font-size: 0.875rem;
  color: #333;
  border-radius: 0.25rem;
}

.lms-sidebar__nav__subitem:hover {
  background-color: rgba(235, 235, 235, 0.443);
}

.lms-sidebar__nav__subitem.router-link-active {
  background-color: #EEEEEEFF;
  font-weight: 500;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {

    .sidebar-mobile * {
        stroke: #bdccff;
        fill: #bdccff;
    }
  .lms-sidebar__nav__subitem {
    color: #ddd;
  }

  .lms-sidebar__nav__subitem.router-link-active {
    background-color: #2e3551;
    color: white;
  }

  .lms-sidebar__nav__subitem:hover {
    background-color: #364066B5;
   
    
  }
}

.sidebar-mobile {
    display: none;
}

.mobile {
    display: none
}
@media (max-width: 768px) {
    .mobile {
        display: block
    }
    .sidebar-mobile {
        padding: 0.5rem !important;
    display: flex;
    position: fixed !important;
    top: 0.5rem !important;
    right: 1.5rem !important;
    z-index: 10000000;
}
    .lms-sidebar {
  position: fixed !important;
  z-index: 10000;
  top: 0;
  right: 0;
  transform: translateX(100%) ;
  transition: all 0.5s ease-in-out;
  height: 0px !important;
  min-height: 0px;
  overflow: hidden;
  border-radius: 0 !important;
}
.sidebar-mobile  svg {
    border-radius: 0.5rem;
}
.sidebar-mobile  *{
    transition: all 0.5s ease-in-out;
}
.sidebar-mobile.open {
    transform: translateX(16px);
}
.sidebar-mobile.open .x-top {
        transform: rotate(45deg) translateY(-9px) translateX(-2px) scaleX(1.65);
    }
    .sidebar-mobile.open .x-bottom {
        transform: rotate(-45deg) translateY(2.75px) translateX(-24px) scaleX(2.5);
    }
.lms-sidebar.open {
    box-sizing: border-box;
  transform: translateX(0%);
  min-height:100dvh ;
  
  box-shadow: 0 -200px 1000px -5px rgb(0, 0, 0), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
}

.lms-sidebar::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(6px);
  background-color: rgba(56, 56, 56, 0.056);
}
}
.lms-sidebar__group-list {
    margin-top: 0.25rem;
    gap: 0.25rem;
    display: flex;
    flex-direction: column;
}
.lms-sidebar__nav-item:hover {
    background-color: rgba(235, 235, 235, 0.443);  
}
.lms-sidebar__nav-item .lms-sidebar__nav-item__arrow * {
    transition: all .5s;
    stroke-width: 0px;
}


.lms-sidebar__nav-item:hover .lms-sidebar__nav-item__arrow *{
    /* stroke: var(--accent) !important; */
    stroke-width: 2px;
}
.lms-sidebar__nav-item.router-link-active {
    background-color: #E9E9E9FF;
    color: rgb(0, 0, 0) !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.23);
}
.lms-sidebar__group:has(.router-link-active) .lms-sidebar__nav-item {
    background-color: #E9E9E9FF;
    color: rgb(0, 0, 0) !important;
}
/* .lms-sidebar__nav__item.router-link-active svg * {
    stroke: white;
} */
@media (max-width: 640px) {
    .sidebar-mobile{
        padding: 0.25rem !important;

    }  

    .sidebar-mobile.open svg {
        scale: .7
    }
}
@media (prefers-color-scheme: dark) {
    .lms-sidebar {
        background-color: var(--lms-dark) !important;
    }
    .lms-sidebar__nav-item  {
        color: white;
    }
    .lms-sidebar__nav-item *{
        stroke: white;
    }

    .lms-sidebar__nav-item.router-link-active {
    background-color: #364066FF !important;
    color: white !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.23);
}

.lms-sidebar__nav-item:hover {
    background-color: #364066B5;
    color: white !important;
}
.lms-sidebar__nav__subitem:hover {
    background-color: #364066B5;
    color: white !important;
}
.lms-sidebar__group:has(.router-link-active) .lms-sidebar__nav-item {
    background-color: #364066FF !important;
    color: white !important;
}

.sidebar-mobile.open svg {
        scale: .7
    }
    .sidebar-mobile.open {
        padding: 0.25rem !important;
    } 
}
</style>

