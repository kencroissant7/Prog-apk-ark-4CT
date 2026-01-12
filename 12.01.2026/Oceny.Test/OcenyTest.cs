using NUnit.Framework;
using System;
using Oceny;

namespace Oceny.Test
{
    public class OcenyTest
    {
        private Ocenyuczniow _grades;

        [SetUp]
        public void SetUp()
        {
            _grades = new Ocenyuczniow();
        }

                        //AAA
        [Test]
        public void AddGrade_poprawna_ocena_dziala()
        {
            //Arrange
            _grades.AddGrade(4);
            _grades.AddGrade(5);
            // Act
            double wynik = _grades.Avg();
            // Assert
            Assert.That(wynik, Is.EqualTo(4.5));
        }


        [Test]
        public void AddGrade_zla_ocena_rzuca_wyjatek()
        {
            Assert.Throws<ArgumentException>(() => _grades.AddGrade(6));
        }


        [Test]
        public void Avg_liczy_poprawnie()
        {
            _grades.AddGrade(3);
            _grades.AddGrade(4);

            double wynik = _grades.Avg();

            Assert.That(wynik, Is.EqualTo(3.5));
        }

        [Test]
        public void Max_zwraca_najwyzsza_ocene()
        {
            _grades.AddGrade(2);
            _grades.AddGrade(5);
            _grades.AddGrade(3);

            int wynik = _grades.Max();

            Assert.That(wynik, Is.EqualTo(5));
        }


        [Test]
        public void Min_zwraca_najnizsza_ocene()
        {
            _grades.AddGrade(2);
            _grades.AddGrade(5);
            _grades.AddGrade(3);

            int wynik = _grades.Min();

            Assert.That(wynik, Is.EqualTo(2));
        }


        [Test]
        public void CzyZaliczone_gdy_srednia_ponizej_2_false()
        {
            _grades.AddGrade(2);
            _grades.AddGrade(1);

            bool wynik = _grades.CzyZaliczone();

            Assert.That(wynik, Is.False);
        }


        [Test]
        public void Brak_ocen_rzuca_wyjatek()
        {
            Assert.Throws<InvalidOperationException>(() => _grades.Avg());
        }
    }
}
