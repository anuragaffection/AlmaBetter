class Solution {
  public int xorOperation(int n, int start) {
    int xorOutput = start;
    for (int i = 1; i < n; i++) {
      xorOutput ^= start + 2 * i;
    }
    return xorOutput;
  }
}
