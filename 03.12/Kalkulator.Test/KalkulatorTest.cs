using NUnit.Framework;
using System;
using Kalkulator;
namespace Kalkulator.Test
{
    public class KalkulatorTest
    {
        private Kalkulator _kalkulator;
        [SetUp]
        public void SetUp()
        {
            _kalkulator = new Kalkulator();
        }

        [Test]
        public void Dodawanie_powinna_zwrocic_sume_a_b()
        {
            //aaa

            //Arrange
            double a = 10;
            double b = 5;
            double result = 15;

            //Act
            double act = _kalkulator.Dodawanie(a,b);

            //Assert
            Assert.That(act,Is.EqualTo(result)); 
        }

        [Test]
        public void Odejmowanie_powinna_zwrocic_roznice_a_b()
        {
            //aaa

            //Arrange
            double a = 10;
            double b = 5;
            double result = 5;

            //Act
            double act = _kalkulator.Odejmowanie(a,b);

            //Assert
            Assert.That(act,Is.EqualTo(result)); 
        }

        [Test]
        public void Mnozenie_powinna_zwrocic_iloczyc_a_b()
        {
            //aaa

            //Arrange
            double a = 10;
            double b = 5;
            double result = 50;

            //Act
            double act = _kalkulator.Mnozenie(a,b);

            //Assert
            Assert.That(act,Is.EqualTo(result)); 
        }

        [Test]
        public void Dzielenie_powinna_zwrocic_iloraz_a_b()
        {
            //aaa

            //Arrange
            double a = 10;
            double b = 5;
            double result = 2;

            //Act
            double act = _kalkulator.Dzielenie(a,b);

            //Assert
            Assert.That(act,Is.EqualTo(result)); 
        }
    }
}