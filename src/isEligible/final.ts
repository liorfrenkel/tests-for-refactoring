export function isEligibleForDiscount(
  customerId: number,
  numOfPurchases: number,
  age: number,
  hasCriminalRecord: boolean,
): boolean {
  const isLuckyWinner = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) === customerId;
  if (!!customerId) {
    if (hasCriminalRecord) {
      if (age > 50) {
        if (numOfPurchases > 10) {
          return true;
        }
        if (age > 60 && numOfPurchases > 5) {
          return true;
        }
      }
    } else {
      if (isLuckyWinner) {
        return true;
      }
      if (age > 20) {
        if (numOfPurchases > 5) {
          return true;
        }
        if (age > 30 && numOfPurchases > 5) {
          return true;
        }
      }
    }
  } else {
    if (!hasCriminalRecord) {
      if (isLuckyWinner) {
        return true;
      }
      if (age > 70) {
        return true;
      }
    }
  }
  return false;
}
