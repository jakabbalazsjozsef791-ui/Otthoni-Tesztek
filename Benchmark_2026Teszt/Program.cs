using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BenchmarkDotNet.Analysers;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Code;
using BenchmarkDotNet.Diagnosers;
using BenchmarkDotNet.Running;

namespace Benchmark_2026Teszt
{
    public class Program
    {
        [Benchmark]
        public List<char> CharLista()
        {
            var list = new List<char>(1000000);

            for (int i = 0; i < 1000000; i++)
            {
                list.Add((char)i);
            }

            return list;
        }

        [Benchmark]
        public List<int> IntLista()
        {
            var list = new List<int>(1000000);

            for (int i = 0; i < 1000000; i++)
            {
                list.Add(i);
            }

            return list;
        }

        [Benchmark]
        public void CharTomb()
        {
            char[] tomb = new char[1000000];

            for (int i = 0; i < tomb.Length; i++)
            {
                tomb[i] = (char)i;
            }
        }

        [Benchmark]
        public void IntTomb()
        {
            int[] tomb = new int[1000000];

            for (int i = 0; i < tomb.Length; i++)
            {
                tomb[i] = i;
            }
        }

        static void Main(string[] args)
        {
            var eredmeny = BenchmarkRunner.Run<Program>();
            Console.ReadKey();
        }
    }
}
