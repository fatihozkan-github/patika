[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

22 27 16 2 18 6
22 27 16 2 18 6
16 22 27 2 18 6
2 16 22 27 18 6
2 16 18 22 27 6
2 6 16 18 22 27

Big-O gösterimini yazınız.

Insertion sort için her adımda bir eleman ele alınır. 
Birinci eleman herhangi bir kontrol durumu tutmaz , ikinci eleman 1 durum , üçüncü eleman 2 durum 
şeklinde ilerler. Yani n. eleman için n-1 tane durum ele alınmış olur.
Bütün durumların toplamı (n * (n-1))/2) olur. Big-O gösteriminde en büyük katsayı ele alındığı için O(n^2) ile gösteririz.
O(n^2)

Time Complexity: 
- Best Case O(n) -> Dizinin sıralı olması durumudur. 
- Worst Case O(n^2) -> Her bir değerin gezilme durumudur. Örneğin dizinin büyükten küçüğe sıralı gelmesi. 
- Average Case O(n^2) -> Best Case ile Worst Case olmayan durumların hepsi.

Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
Average case kapsamına girer.

[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
7 3 5 8 2 9 4 15 6
3 7 5 8 2 9 4 15 6
3 5 7 8 2 9 4 15 6
3 5 7 8 2 9 4 15 6
