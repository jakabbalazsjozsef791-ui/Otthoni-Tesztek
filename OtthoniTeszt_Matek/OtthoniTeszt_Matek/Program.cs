using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OtthoniTeszt_Matek
{
    internal class Program
    {
        // Public method that does the math.
        public void Szamolas(string a, string b, char v)
        {
            double res = 0;

            if (double.TryParse(a, out double s) == true && double.TryParse(b, out double z))
            {
                if (v != '+' && v != '-' && v != '*' && v != '/')
                {
                    Console.WriteLine($"Hiba!");
                }
                if (v == '+')
                {
                    res = Convert.ToDouble(a) + Convert.ToDouble(b);
                    Console.WriteLine($"Az eredmény: {Math.Round(res)}");
                }
                else if (v == '-')
                {
                    res = Convert.ToDouble(a) - Convert.ToDouble(b);
                    Console.WriteLine($"Az eredmény: {Math.Round(res)}");
                }
                else if (v == '/')
                {
                    res = Convert.ToDouble(a) / Convert.ToDouble(b);
                    Console.WriteLine($"Az eredmény: {Math.Round(res)}");
                }
                else if (v == '*')
                {
                    res = Convert.ToDouble(a) * Convert.ToDouble(b);
                    Console.WriteLine($"Az eredmény: {Math.Round(res)}");
                }
            }
            else
            {
                Console.WriteLine("Hiba!");
            }
            
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Szám1: ");

            string szam1 = Console.ReadLine();

            Console.WriteLine("Szám2: ");
            string szam2 = Console.ReadLine();

            Console.WriteLine("+,-,/,* (összeadás,kivonás,osztás, vagy szorzás?): ");
            char valasz = Convert.ToChar(Console.ReadLine());

            // Objektum létrehozása
            Program p = new Program();

            // Metódus meghívása
            p.Szamolas(szam1, szam2, valasz);

            Console.ReadKey();
        }
    }
}
