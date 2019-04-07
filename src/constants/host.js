if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^192(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
) {
  var HOST = "http://acbtet2019.wejelly.com/";
} else {
  var HOST = window.location.protocol + "//" + window.location.hostname + "/";
}

export default HOST;
