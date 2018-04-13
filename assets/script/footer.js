window.$docsify = {
  function (hook, vm) {
    hook.beforeEach(function (html) {
      var editHtml
      return editHtml
        + html
        + '\n\n----\n\n'
        + '<a href="https://docsify.js.org" target="_blank" style="color: inherit; font-weight: normal; text-decoration: none;">Powered by docsify</a>'
    })
  }
}