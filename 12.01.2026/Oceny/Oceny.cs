using System;

namespace Oceny
{
    public class Ocenyuczniow
    {
        private int[] grades = new int[0];

        public void AddGrade(int grade)
        {
            if (grade < 1 || grade > 5)
            {
                throw new ArgumentException("Zła ocena");
            }

            int[] nowa = new int[grades.Length + 1];

            for (int i = 0; i < grades.Length; i++)
            {
                nowa[i] = grades[i];
            }

            nowa[grades.Length] = grade;
            grades = nowa;
        }

        public double Avg()
        {
            if (grades.Length == 0)
            {
                throw new InvalidOperationException("Brak ocen");
            }

            int suma = 0;

            for (int i = 0; i < grades.Length; i++)
            {
                suma += grades[i];
            }

            return (double)suma / grades.Length;
        }

        public int Max()
        {
            if (grades.Length == 0)
            {
                throw new InvalidOperationException("Brak ocen");
            }

            int max = grades[0];

            for (int i = 1; i < grades.Length; i++)
            {
                if (grades[i] > max)
                {
                    max = grades[i];
                }
            }

            return max;
        }

        public int Min() 
        {
            if (grades.Length == 0)
            {
                throw new InvalidOperationException("Brak ocen");
            }

            int min = grades[0];

            for (int i = 1; i < grades.Length; i++)
            {
                if (grades[i] < min)
                {
                    min = grades[i];
                }
            }

            return min;         
        }

        public bool CzyZaliczone()
        {
            return Avg() >= 2.0;
        }
    }
}
