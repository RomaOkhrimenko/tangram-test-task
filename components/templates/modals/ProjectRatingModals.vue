<template>
  <div class="rating-modals">
    <div class="rating-modals__container">
      <h3 class="rating-modals__title">Werten sie die geleistete arbeit aus</h3>

      <div class="rating-modals__points">
        <div class="rating-modals-point">
          <span>Zusammenarbeit</span>
          <div class="rating-modals-point__stars">
            <EmptyStarSvg v-for="(item, index) in 5" :key="index" />
          </div>
        </div>

        <div class="rating-modals-point">
          <span>Zusammenarbeit</span>
          <div class="rating-modals-point__stars">
            <EmptyStarSvg v-for="(item, index) in 5" :key="index" />
          </div>
        </div>

        <div class="rating-modals-point">
          <span>Zusammenarbeit</span>
          <div class="rating-modals-point__stars">
            <EmptyStarSvg v-for="(item, index) in 5" :key="index" />
          </div>
        </div>

        <div class="rating-modals-point">
          <span>Zusammenarbeit</span>
          <div class="rating-modals-point__stars">
            <EmptyStarSvg v-for="(item, index) in 5" :key="index" />
          </div>
        </div>
      </div>

      <div class="rating-modals__comment">
        <textarea placeholder="Kommentar" />
      </div>

      <div class="rating-modals__buttons">
        <button @click="handleClosedProjectModalStatus(false)">ZURÜCK</button>
        <button @click="handleClosedProjectModalStatus(false)">
          ABSCHICKEN
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { EmptyStarSvg } from '~/assets/images/svg'
import { mapMutations } from 'vuex'
export default {
  components: {
    EmptyStarSvg
  },

  methods: {
    ...mapMutations('chat', ['handleClosedProjectModalStatus'])
  }
}
</script>

<style lang="scss" scoped>
.rating-modals {
  width: 544px;

  &__title {
    font-size: 2.6rem;
    line-height: 32px;
    text-align: center;
    margin-bottom: 4.8rem;
  }

  &__points {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 3.2rem;
  }

  &-point {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 0;
    border-bottom: 1px solid #d9d9d9;

    &:last-child {
      border-bottom: 0;
    }

    span {
      font-size: 1.7rem;
      line-height: 20px;
    }

    &__stars {
      display: flex;
      align-items: center;

      svg {
        color: #d9d9d9;
      }
    }
  }

  &__comment {
    margin-bottom: 5.6rem;
    textarea {
      resize: vertical;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      outline: none;
      border-radius: 4px;
      width: 100%;
      padding: 1.6rem;
      max-height: 200px;

      font-weight: 500;

      font-size: 1.7rem;
      line-height: 20px;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    button {
      width: 50%;
      border-radius: 4px;
      font-size: 1.7rem;
      line-height: 20px;
      padding: 1.8rem 0;
      border: 0;
      outline: none;
      text-transform: uppercase;
      font-weight: 700;
      &:first-child {
        margin-right: 3.2rem;
        background-color: #eaeaea;
      }

      &:last-child {
        color: #fff;
        background-color: #111;
      }
    }
  }
}
</style>
