import java.util.*;

public class SplitWord {
    //split the word and put it in a hashmap
    public static HashMap<String, Integer> map = new HashMap<>();
    public static HashSet<String> stop = new HashSet<>();

    private static class HeapNode{
        private int freq;
        private String word;
        HeapNode(int freq, String word){
            this.freq = freq;
            this.word = word;
        }
    }

    public static void addStop(String input){
        String[] words = input.split(",");
        int n = words.length;
        for (int i = 0; i < n; i++) {
            stop.add(words[i]);
        }
    }
    public static void SplitandAdd(String input){
        String[] words = input.split(" ");
        int n = words.length;
        for (int i = 0; i < n; i++){
            if (stop.contains(words[i] )){
                map.put(words[i], map.getOrDefault(words[i], 0) + 1);
            }
        }
    }

    public static void nBiggest(){
        PriorityQueue<HeapNode> pq = new PriorityQueue<>((p,q)->q.freq-p.freq);
        for(Map.Entry<String, Integer> entry: map.entrySet()){
            pq.add(new HeapNode(entry.getValue(), entry.getKey()));
        }
        int total = 10;
        while(total-- > 0){
            //this will print your word
            HeapNode top = pq.poll();
            System.out.println(top.word + ":" + top.freq);
        }
    }

    public static void main(String[] args) {
        String path1= "/Users/victoriacooper/Desktop/1.txt";
        String path2= "/Users/victoriacooper/Desktop/3.txt";
        String stopwords = ReadFile.readfile(path1);
        String words = ReadFile.readfile(path2);

        addStop(stopwords);
        SplitandAdd(words);
        nBiggest();

    }
}
