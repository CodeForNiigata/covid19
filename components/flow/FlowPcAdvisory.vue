<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitle">{{
            $t('新型コロナ受診相談窓口（日本語のみ）')
          }}</span>
        </div>
        <div :class="[$style.AdvisoryContentsColsSentense, 'mt-4']">
          {{ $t('帰国者・接触者 電話相談センター') }}
        </div>
        <div>
          <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryWhiteBox]">
            <span :class="$style.AdvisoryWhiteBoxSentense">
              {{ $t('24時間対応') }}
            </span>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div class="py-8">
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('平日日中/夜間') }}
          </div>
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              'mt-4'
            ]"
          >
            <a
              href="https://www.pref.niigata.lg.jp/site/shingata-corona/corona-center1109.html"
              target="_blank"
              rel="noopener"
            >
              <span>{{ $t('県内各保健所の電話/FAX番号') }}</span>
              <v-icon size="18">
                mdi-open-in-new
              </v-icon>
              <br />
              <span :class="$style.fzMedium">{{
                $t(
                  '※【夜間緊急連絡先】は警備員室につながります。電話番号をお伝えいただき、担当から折り返し御連絡します。'
                )
              }}</span>
            </a>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div class="py-8">
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('FAXの場合') }}
          </div>
          <div :class="[$style.AdvisoryContentsText, 'mt-4']">
            {{ $t('以下の様式にて対応') }}
          </div>
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              'mt-4'
            ]"
          >
            <a
              href="https://www.pref.niigata.lg.jp/uploaded/life/345005_624817_misc.docx"
              target="_blank"
              rel="noopener"
            >
              <span :class="$style.fzMedium"
                >{{ $t('FAX相談様式') }} (Word)
              </span>
              <v-icon size="18">
                mdi-open-in-new
              </v-icon>
            </a>
          </div>
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              'mt-4'
            ]"
          >
            <a
              href="https://www.pref.niigata.lg.jp/uploaded/life/345005_624824_misc.pdf"
              target="_blank"
              rel="noopener"
            >
              <span :class="$style.fzMedium"
                >{{ $t('FAX相談様式') }} (PDF)
              </span>
              <v-icon size="18">
                mdi-open-in-new
              </v-icon>
            </a>
          </div>
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              'mt-4'
            ]"
          >
            <a
              href="https://www.pref.niigata.lg.jp/uploaded/life/345005_624825_misc.pdf"
              target="_blank"
              rel="noopener"
            >
              <span :class="$style.fzMedium"
                >{{ $t('FAX相談様式(記入例)') }} (PDF)
              </span>
              <v-icon size="18">
                mdi-open-in-new
              </v-icon>
            </a>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div class="py-8">
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('遠隔手話サービス') }}
          </div>
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              'mt-4'
            ]"
          >
            <a
              href="https://www.pref.niigata.lg.jp/uploaded/life/345005_624816_misc.pdf"
              target="_blank"
              rel="noopener"
            >
              <span :class="$style.fzMedium">
                {{
                  $t(
                    '新型コロナウイルス感染症の疑いがある方を対象にした遠隔手話サービスを開始します'
                  )
                }}
                (PDF)
              </span>
              <v-icon size="18">
                mdi-open-in-new
              </v-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.fzMedium {
  font-size: 12px;
  font-weight: normal;
}
.Advisory {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: $gray-2;
  &Container {
    background-color: $gray-5;
    border-radius: 4px;
    height: 100%;
    padding: 30px 20px 20px 20px;
    margin-bottom: 10px;
    text-align: center;
  }
  &Contents {
    font-weight: bold;
    &:not(:first-child) {
      border-top: 0.5px solid $gray-4;
    }
    &Title {
      font-size: 26px;
      line-height: 28px;
    }
    &Title2 {
      font-size: 18px;
    }
    &SubTitle {
      font-size: 18px;
    }
    &Text {
      font-size: 13px;
    }
    &ColsSentense {
      line-height: 18px;
    }
  }
  &BlockCentering {
    display: flex;
    justify-content: center;
  }
  &Link {
    line-height: 22px;
    text-align: left;
    a {
      color: rgba(0, 0, 0, 0.87);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &TelephoneArea {
    display: inline-flex;
  }
  &Telephone {
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: bold;
    &:link,
    &:visited,
    &:hover,
    &:active,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &::before {
      content: '';
      display: inline-block;
      margin-right: 5px;
      width: 26px;
      height: 26px;
      background-image: url(/flow/phone-24px.svg);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &BoxContainer {
    border-radius: 4px;
    text-align: center;
    padding: 20px 10px;
    margin: 24px auto;
  }
  &WhiteBox {
    background-color: $white;
    width: 160px;
    padding: 10px;
    &Sentense {
      color: $blue-1;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
