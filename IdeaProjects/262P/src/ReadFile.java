import java.io.File;  // Import the File class
import java.io.FileNotFoundException;  // Import this class to handle errors
import java.util.Scanner; // Import the Scanner class to read text files

public class ReadFile {
    public static String readfile(String path) {
        try {
            File myObj = new File(path);
            Scanner myReader = new Scanner(myObj);
            StringBuilder sb = new StringBuilder();
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                sb.append(data);
            }
            myReader.close();
            return sb.toString();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return null;
    }
}