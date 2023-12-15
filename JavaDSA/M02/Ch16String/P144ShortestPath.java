package JavaDSA.javadsa02.Ch16String;


/**
 * -- #144 
 * -- find the Shortest path to reach the destination 
 * 
 * -- Given a route containing 4 direction, E, W, N, S
 * -- E - East, W- west, N-North, S-south 
 * -- Route given = W N E E N E S E N N N 
 * -- One step = one unit 
 * 
 */


/*
 * -- Math.sqrt()
 * -- (float)
 * -- conversion 
 */


public class P144ShortestPath {

    public static float shortestRoute(String route){
        int x = 0;
        int y = 0;

        for (int i = 0; i < route.length(); i++){
            char dir = route.charAt(i);

            if (dir == 'N'){
                y++;
            }
            else if (dir == 'S'){
                y--;
            }
            else if (dir == 'E'){
                x++;
            }
            else if (dir == 'W'){
                x--;
            }
        }

        float distance = (float) Math.sqrt( y*y + x*x);
        return distance;
    }


    public static void main (String args []){

        String route = "WNEENESENNN"; // 5
        System.out.println(shortestRoute(route));

        String route2 = "NNNN"; // 4
        System.out.println(shortestRoute(route2));
    }

}


// thank you 
// all the very best 