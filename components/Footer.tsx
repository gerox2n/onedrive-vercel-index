import config from '../config/site.config'

const createFooterMarkup = () => {
  return process.env.VERCEL_GIT_COMMIT_SHA
  ? {
    __html: config.footer + ' | ' + process.env.VERCEL_GIT_COMMIT_SHA?.slice(0,7),
  }
  : {
    __html: config.footer,
  }
}

const Footer = () => {
  return (
    <div
      className="w-full border-t border-gray-900/10 p-4 text-center text-xs font-medium text-gray-400 dark:border-gray-500/30"
      dangerouslySetInnerHTML={createFooterMarkup()}
    ></div>
  )
}

export default Footer
