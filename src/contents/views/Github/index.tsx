import type { PlasmoContentScript } from 'plasmo'

import { useGitHub } from '../../hooks/useGitHub'
import useScrollToTop from '../../hooks/useScrollToTop'
import OnlineEditBtn from './components/OnlineEditBtn'
import ScrollToTopBtn from './components/ScrollToTopBtn'

export const config: PlasmoContentScript = {
  matches: ['https://github.com/*/*'],
}

export default function FunctionPage() {
  const { isCodePage } = useGitHub()
  const [isTopPage, setToTop] = useScrollToTop() as [boolean, () => void]
  return (
    <>
      {isCodePage && <OnlineEditBtn title='在线编辑' />}
      {isCodePage && !isTopPage && <ScrollToTopBtn onClick={setToTop} />}
    </>
  )
}
