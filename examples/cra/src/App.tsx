import { ExtendedRecordMap } from '@schminkel/notion-types'
import { NotionRenderer } from '@schminkel/react-notion-x'
import { Code } from '@schminkel/react-notion-x/build/third-party/code'
import { Collection } from '@schminkel/react-notion-x/build/third-party/collection'
import { Equation } from '@schminkel/react-notion-x/build/third-party/equation'
import { Modal } from '@schminkel/react-notion-x/build/third-party/modal'
import { Pdf } from '@schminkel/react-notion-x/build/third-party/pdf'

import defaultRecordMap from './record-map.json'

function App() {
  const recordMap = defaultRecordMap as unknown as ExtendedRecordMap

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      components={{
        Code,
        Collection,
        Equation,
        Pdf,
        Modal
      }}
    />
  )
}

export default App
