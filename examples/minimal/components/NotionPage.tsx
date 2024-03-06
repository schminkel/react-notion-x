import * as React from 'react'
import Head from 'next/head'

import { ExtendedRecordMap } from '@schminkel/notion-types'
import { getPageTitle } from '@schminkel/notion-utils'
import { NotionRenderer } from '@schminkel/react-notion-x'

export const NotionPage = ({
  recordMap,
  rootPageId
}: {
  recordMap: ExtendedRecordMap
  rootPageId?: string
}) => {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)
  console.log(title, recordMap)

  return (
    <>
      <Head>
        <meta name='description' content='React Notion X Minimal Demo' />

        <title>{title}</title>
      </Head>

      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
      />
    </>
  )
}
