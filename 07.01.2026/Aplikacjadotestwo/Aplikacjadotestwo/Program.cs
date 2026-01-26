using System;
using System.Linq;

class Program
{
    public static double Oblicz(int[] liczby) 
    { 
        int sum = liczby.Sum();

        if (sum < 10)
        {
            return liczby.Average();
        }
        else if (sum >= 11 && sum <= 20)
        {
            return sum;
        }else if (sum > 20 )
            return liczby.Where(x => x % 2 !=0).Sum();
    }

    static void Main()
    {
        int[] liczby = new int[10];
        Random random = new Random();
        for (int i = 0; i < 10; i++) 
        {
            liczby[i] = random.Next(0,5);
        }
        Console.WriteLine("Oto wylosowaneliczby");
        foreach(int x in liczby) 
            Console.Write(x + " ");
        Console.WriteLine();

        double wynik = Oblicz(liczby);
        Console.WriteLine("Wynik" + wynik);

    }
}