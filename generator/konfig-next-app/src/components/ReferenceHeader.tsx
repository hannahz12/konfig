import { LayoutHeader } from './LayoutHeader'
import { Dispatch, SetStateAction } from 'react'
import { HeaderWrapper } from './HeaderWrapper'
import { TABS } from './HeaderButton'
import { HeaderTabs } from './HeaderTabs'
import type { GenerateLogoLinkResponse } from '@/utils/generate-logo-link'
import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'
import { KonfigYamlCommonType } from 'konfig-lib'

export function ReferenceHeader({
  opened,
  setOpened,
  demos,
  title,
  hasDocumentation,
  omitOwnerAndRepo,
  owner,
  repo,
  logo,
  allMarkdown,
  cta,
}: {
  opened: boolean
  hasDocumentation: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
  demos: string[]
  title: string
  omitOwnerAndRepo?: boolean
  owner: string
  allMarkdown: MarkdownPageProps['allMarkdown']
  repo: string
  logo: GenerateLogoLinkResponse
  cta: NonNullable<KonfigYamlCommonType['portal']>['cta'] | null
}) {
  return (
    <HeaderWrapper
      allMarkdown={allMarkdown}
      hasLightAndDarkLogo={typeof logo !== 'string'}
    >
      <LayoutHeader
        allMarkdown={allMarkdown}
        breakpoint="lg"
        opened={opened}
        setOpened={setOpened}
        title={title}
        logo={logo}
        cta={cta}
      />
      <HeaderTabs
        hasLightAndDarkLogo={typeof logo !== 'string'}
        owner={owner}
        repo={repo}
        hasDocumentation={hasDocumentation}
        allMarkdown={allMarkdown}
        demos={demos}
        currentTab={TABS.reference}
        omitOwnerAndRepo={omitOwnerAndRepo}
      />
    </HeaderWrapper>
  )
}
