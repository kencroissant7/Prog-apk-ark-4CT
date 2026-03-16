using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kalkulator
{
    public class Program
    {
        static void Main(string[] args)
        {
            double a = 10;
            double b = 5;
            Program program = new Program();
            Console.WriteLine(program.dodawanie(a, b));
            Console.WriteLine(program.odejmowanie(a, b));
            Console.WriteLine(program.mnozenie(a, b));
            Console.WriteLine(program.dzielenie(a, b));
        }      //z malej litery metody
        public double dodawanie(double a, double b) => a + b;
        public double odejmowanie(double a, double b) => a - b;
        public double mnozenie(double a, double b) => a * b;
        public double dzielenie(double a, double b)
        {
            if (b == 0)
            {
                throw new ArgumentException("Nie dziel szlachcicu przez 0");
            }

            return a / b;

        }
    }
}
