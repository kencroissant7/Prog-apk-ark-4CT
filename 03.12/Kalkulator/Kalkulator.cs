using System;
namespace Kalkulator  //od folderu
{
    public class Kalkulator
    {//od pliku
        
        public double Dodawanie(double a, double b) => a + b;
        public double Odejmowanie(double a, double b) => a - b;
        public double Mnozenie(double a, double b) => a * b;
        public double Dzielenie(double a, double b)
        {
            if (b == 0)
            {
                throw new ArgumentException("Nie dziel szlachcicu przez 0");
            }

            return a / b;
            
        }

    } 
}