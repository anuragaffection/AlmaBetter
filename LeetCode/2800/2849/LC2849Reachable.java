






// this soluton is wrong, we can not do it using eucidean distance formula 
public class Solution {
    public boolean isReachableAtTime(int sx, int sy, int fx, int fy, int t) {
        
        double displacement = Math.sqrt( (sx - fx) * (sx - fx) + (sy - fy) * (sy - fy));

        return (int) displacement <= t ;
    }
}