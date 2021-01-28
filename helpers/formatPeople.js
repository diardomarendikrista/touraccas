function formatPeople(value) {
  if (!value) {
    return `No tourist yet`
  } else {
    return `${value} person(s)`
  }
}

module.exports = formatPeople;