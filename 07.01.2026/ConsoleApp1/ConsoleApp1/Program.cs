
namespace program
{
    class Uczen
    {
        private string imie;
        private string nazwisko;
        private double sredniaOcen;

        public Uczen(string imie, string nazwisko, double sredniaOcen)
        {
            this.imie = imie;
            this.nazwisko = nazwisko;
            this.sredniaOcen = sredniaOcen;
        }
        public bool CzyZdany()
        {
            return sredniaOcen >= 2.0;
        }

        public void WyswietlDane()
        {
            Console.WriteLine(imie + " " + nazwisko);
            Console.WriteLine(imie + " " + nazwisko);
        }
    }
}