<template>
  <div class="enter-address">
    <div class="enter-address-top">
      <div class="enter-address-top__plz">
        <span class="enter-address-title">Wo wohnst du?</span>
        <b class="enter-address-plz">PLZ</b>
        <RepairAddress />
      </div>
      <div class="enter-address-top__checkbox">
        <span class="enter-address-title">Haben Sie Aufzug?</span>
        <YesOrNo />
      </div>
    </div>
    <div class="enter-address-line"></div>
    <div class="enter-address-bottom">
      <div class="enter-address-bottom__plz">
        <span class="enter-address-title">Wo wohnst du?</span>
        <b class="enter-address-plz">PLZ</b>
        <RepairAddress />
      </div>
      <div class="enter-address-top__checkbox">
        <span class="enter-address-title">Haben Sie Aufzug?</span>
        <YesOrNo />
      </div>
    </div>
    <div class="enter-address-radio">
      <RadioInput text="Große Aufzug" />
      <RadioInput text="Kleine Aufzug" />
    </div>
  </div>
</template>

<script>
import RepairAddress from '@/modules/services/components/templates/RepairAddress.vue'
import YesOrNo from '@/modules/services/components/templates/YesOrNo.vue'
import RadioInput from '@/modules/services/components/inputs/RadioInput.vue'

export default {
  components: { RadioInput, YesOrNo, RepairAddress }
}
</script>

<style lang="scss">
.enter-address {
  display: flex;
  flex-direction: column;
  padding: 4.8rem 3.2rem;

  &-title {
    font-size: 1.3rem;
    line-height: 24px;
    opacity: 0.56;
  }

  &-plz {
    font-size: 1.3rem;
    line-height: 24px;
    font-weight: 500;
    text-align: center;
  }

  &-top {
    padding-bottom: 2.4rem;
    &__plz {
      display: grid;
      grid-template-columns: 15% 20% 65%;
      align-items: center;
      margin-bottom: 2.4rem;
    }

    &__checkbox {
      display: grid;
      grid-template-columns: 35% 65%;
      align-items: center;
    }
  }

  .input-text {
    max-width: 207px;
  }

  &-line {
    height: 1px;
    width: 100%;
    /*Horizontal*/
    background-image: linear-gradient(
      to right,
      #d9d9d9 65%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 18px 2px;
    background-repeat: repeat-x;
    margin-bottom: 2.4rem;
  }

  &-bottom {
    margin-bottom: 1.6rem;
    &__plz {
      display: grid;
      grid-template-columns: 15% 20% 65%;
      align-items: center;
      margin-bottom: 2.4rem;
    }

    &__checkbox {
      display: grid;
      grid-template-columns: 35% 65%;
      align-items: center;
    }
  }

  &-radio {
    margin-left: 35%;
    .radio-input {
      &:first-child {
        margin-bottom: 1.6rem;
      }
    }
  }
}
</style>
