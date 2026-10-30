function formatAmount(cents) {
  return (cents / 100).toFixed(2);
}

module.exports = { formatAmount };
