<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard
        :title="$t(item.title)"
        :link="item.link"
        :body="$t(item.body)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  data() {
    return {
      items: [
        {
          title: '経済産業省の支援策',
          link: 'https://www.meti.go.jp/covid-19/',
          body: '新型コロナウイルス感染症関連'
        },
        {
          title: '新潟県　新型コロナウイルス感染症対策　事業者の皆様へ',
          link:
            'https://www.pref.niigata.lg.jp/site/shingata-corona/jigyousya.html',
          body:
            '新型コロナウイルス感染症で影響を受けている皆様にご活用できる支援制度をご紹介します'
        },
        {
          title: '新潟市　事業者向け支援',
          link:
            'https://www.city.niigata.lg.jp/iryo/kenko/yobou_kansen/kansen/covid-19/zigyousyashien/index.html',
          body: '新潟市より引用'
        },
        {
          title: '新潟県信用保証協会',
          link: 'http://www.niigata-cgc.or.jp/cat/topics',
          body: '新潟県信用保証協会のトピックス一覧'
        },
        {
          title: '新型コロナウイルス感染症に関連する人権への配慮について',
          link:
            'https://www.pref.niigata.lg.jp/sec/fukushihoken/9837569812.html',
          body: '新型コロナウイルス感染症に関連する人権への配慮'
        },
        {
          title: '新型コロナウイルス感染症　啓発コマーシャル',
          link:
            'https://www.pref.niigata.lg.jp/sec/kouhou/shingata-corona-cm.html',
          body:
            '疑わしい情報の注意喚起及び及び相談窓口・コールセンターのご案内(15秒)'
        },
        {
          title:
            'テレワークに関する助成、補助（一般社団法人　日本テレワーク協会）',
          link: 'https://japan-telework.or.jp/tw_about-2/subsidy/',
          body:
            '助成や補助の実施期間や申請締め切りについては各事業ページでご確認ください。'
        },
        {
          title: 'テレワークに関する助成、補助（厚生労働省）',
          link:
            'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/shigoto/telework.html',
          body: 'テレワーク普及促進関連事業'
        }
      ]
    }
  },
  head() {
    return {
      title: '企業の皆様・はたらく皆様へ'
    }
  }
}
</script>

<style lang="scss">
.Worker {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>
