# Laplas

1403/03/07

---

$f(t) = 4$

$F(s) = 4/5$

$f(t) = e^{2t} \ra F(s)=\frac1{s-2}$

$f(t)=fe^{-3t} \ra F(s)=5\times\frac1{s+3}$

$f(t)=2\sin{3t} \ra F(s)=2\times\frac3{s^2+9}$

$f(t) = 5\cos{t} \ra F(s)=5\times ???$

---

$ F(s)=\frac6 s \ra f(t)=t $

$ F(s)=\frac3 {s+1} \ra f(t)=3e^{-t}$

$ F(s)=\frac{2s} {s^2+16} \ra f(t)=\frac2 {\cos{4t}} $

---

$ F(s)=\frac5{s^2-49} \ra f(t) = 5/7 \times \sinh{7t} $

$ f(t)=t^7 \ra F(s) = \frac {7!} {s^8} $

$ F(s) = \frac 1 {s^3} \ra f(t) = \frac 1 2 t^2 $

$ f(t)=t^{-\frac 1 2} \ra F(s) = \frac {\Gamma \frac 1 2}{s ^ {\frac 1 2}} $

$ f(t)=t^{\frac 1 2} \ra F(s) = \frac {\Gamma \frac 3 2}{s ^ {\frac 3 2}} $

$ f(t) = t^{\f 3 2} \ra \f {\Gamma \f 5 2} {s ^ {\f 5 2}} = \f {\f 3 2 \Gamma \f 3 2} {s ^ {\f 5 2}} = \f { \f 3 2 \Gamma(1 + \f 1 2)} {s ^ {\f 5 2}} = \f 3 4 \Gamma \f 1 2 \times \f {1} {s ^ {\f 5 2}} = \f {3\sqrt{\pi}} {4 \times {s ^ {\f 5 2}}} $

---

$ F(s) = \f 1 {s^2 + 25} \ra f(t) = \f 5 5 \t \f {1} {s^2 + 25} = \f 1 5 \sin {5t} $

---

$ F(s) = \f {3s+5} {s^2 + 2s -3} \ra f(t) = \f A {s+3} + \f {B} {s-1} = A(s-1) + B(s+3) = 3s + 5 $

$ \ra $

$ 3B-A = 5 $

$ A + B=3 $

$ \ra $

$ A=2 , B=1 $

---

### نمرات
- ف1: میو را یاد بگیرید 4 نمره
- ف2: 8 نمره
- ف3: لاپلاس 8 نمره

---

$  L = \int_0^\infty {(2x^5 + 3x)} e^{-3x} dx $

$  L{(2x^5 + 3x)} = 2\t \f {5!} {s^6} + \f 3 {s^2} = \f {483} {729} $

$ \blue {  L\{f(t)\} = \int_0^\infty f(t) e^{-st} + dt } $

---

$ \green { L = \int_0^1 \f {dx} {\sqrt{-\ln x}}  }  $

$  x = -e^{-t} $

$  dx = -e^t dt  $ \
$  x =1\ra t=0  \ra e^0=1 $

$  x =0\ra t=\infty \ra e^{-\infty} = 0 $

$  x = -e^{-t} $

$  \ln x = ene^{-t}  $ \
$  -\ln x = t  $

$  L = \int_0^\infty   \f {-t} {\sqrt t}  \ra L\{f(t)\} = -\f {\sqrt\pi}{s^2} = \sqrt\pi $

$\green\searrow s=-1$

$  f(t) = -t^{-\f 1 2} \ra   $

---

$  \int_0^1 \f {dt} {\sqrt{-\ln x}} = \int_\infty^0 \f {-e^{-t} dt } {\sqrt t} \ra ??? $

---

تمرین

1. $$  L(\f{1} {s^2+64})  $$

2. $$  L^{-1}(\f {2s}{s^7 + 4})  $$

3. $$  L^{-1}  $$

4. $$  L^{-1} \f {s+3}{s^2+5} ??? $$

5. $$  L^{-1}(\f {1} {(s+1)(s+2)})  $$
1. $$    $$
1. $$    $$
1. $$    $$
1. $$    $$
1. $$    $$


### قضیه مقدار اولیه و مقدار نهایی

$  F(s) = \f {2s^2 + 3} {s^3+s^2+s+7}  $

$  \lim _{t -> 0 } f(t) ???  $


## روز 1403/03/21

$  y'' + y' -2y = 5e^t  $ &emsp; &emsp; $y(0) = 7 $ &emsp; $y'(0) = 0$

$$
(\f 2 s d\{y\} - sy(0) - y'(0)) + (sL\{y\}-y(0))
$$
???

----
## قضیه اول انتقال

$  L \{f(t)\} = F(s)  $

$  L\{e^{at} f(t)\} = F(s-a)  $

$  L^{-1}\{F(s-a)\} = e^{at}.f(t)  $

$  L \{e^{5t}\sin{2t} \} = \f 2 {s^2 + 4}  $

$  s \rightarrow s-5  $

$  = \f 2 {(s-5)^2 + 4}  $




















