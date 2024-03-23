class Solution {
    public int buyChoco(int[] prices, int money) {
        Arrays.sort(prices);
        if (prices[0] + prices[1] <= money){
            return money - (prices[0] + prices[1]);
        }
        return money;
    }
}


// solution 02 
class Solution {
    public int buyChoco(int[] prices, int money) {
        int firstSmallest = Integer.MAX_VALUE;
        int secondSmallest = Integer.MAX_VALUE;

        for (int price : prices){
            if (price < firstSmallest){
                secondSmallest = firstSmallest;
                firstSmallest = price;
            } else {
                secondSmallest = Math.min(secondSmallest, price);
            }
        }

        int leftMoney = money - (firstSmallest + secondSmallest);

        return leftMoney >= 0 ? leftMoney : money;
    }
}