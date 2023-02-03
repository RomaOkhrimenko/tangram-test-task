<template>
  <div class="contacts-input">
    <svg id="search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <path id="Vector" d="M0,0H16V16H0Z" fill="none" opacity="0"/>
      <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(1.333 1.333)">
        <path id="Контур_5693" data-name="Контур 5693" d="M15.167,9.833A5.333,5.333,0,1,1,9.833,4.5,5.333,5.333,0,0,1,15.167,9.833Z" transform="translate(-4.5 -4.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Контур_5694" data-name="Контур 5694" d="M28.975,28.975l-4-4" transform="translate(-15.642 -15.641)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      </g>
    </svg>

    <input type="text" placeholder="Finden">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contacts-input {
  display: flex;
  align-items: center;
  width: 100%;
  background: #EAEAEA;
  border-radius: 8px;
  padding: 0 1.6rem;

  svg {
    margin-right: 1rem;
  }

  input {
    background: transparent;
    width: 100%;
    padding: 1.2rem 0;
    border: none;
  }
}
</style>
