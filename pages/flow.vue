<template>
  <div class="Flow">
    <div class="Flow-Heading">
      <CovidIcon aria-hidden="true" />
      <h2 class="Flow-Heading-Title">
        {{ $t('新型コロナウイルス感染症が心配なときに') }}
      </h2>
    </div>
    <div>
      <div class="only-pc">
        <flow-pc />
      </div>
      <div class="only-sp">
        <flow-sp />
      </div>
      <div class="Flow-Card-Button-Wrapper mt-6">
        <a
          href="https://www.pref.niigata.lg.jp/site/shingata-corona/corona-center1109.html"
          target="_blank"
          rel="noopener"
          class="Flow-Card-Button"
        >
          {{ $t('詳細を見る（新潟県）') }}
          <v-icon class="Flow-Card-Button-ExternalLinkIcon" size="20">
            mdi-open-in-new
          </v-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CovidIcon from '@/static/covid.svg'
import FlowPc from '@/components/flow/FlowPc.vue'
import FlowSp from '@/components/flow/FlowSp.vue'

export default {
  components: {
    CovidIcon,
    FlowPc,
    FlowSp
  },
  head() {
    return {
      title: this.$t('新型コロナウイルス感染症が心配なときに')
    }
  }
}
</script>

<style lang="scss">
.Flow {
  margin-bottom: 20px;
  &-Heading {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    > svg {
      width: 30px;
      height: 30px;
      > path:not(:first-of-type) {
        fill: $gray-2;
      }
    }
    &-Title {
      @include font-size(30);
      font-weight: normal;
      color: $gray-2;
      margin-left: 8px;
    }
  }
  &-Card-Button {
    @include button-text('md');
    @include font-size(20);
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    color: $green-1 !important;
    &-Wrapper {
      text-align: center;
    }
    &:hover {
      color: $white !important;
    }
    &-ExternalLinkIcon {
      margin-left: 2px;
      color: $green-1 !important;
    }
  }
  &-PullRight {
    margin: 0 0 0 auto;
  }
}
@include largerThan($medium) {
  .only-sp {
    display: none;
  }
  .only-pc {
    display: block;
  }
}
@include lessThan($medium) {
  .only-sp {
    display: block;
  }
  .only-pc {
    display: none;
  }
}
</style>
