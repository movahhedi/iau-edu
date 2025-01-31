# جزوه 2
سلام
$$\DeclareMathOperator{\d}{d}$$
$$\DeclareMathOperator{\sech}{sech}$$
$$\DeclareMathOperator{\csch}{csch}$$

---
$$ xy'' + 2y' + y = 0 $$

$$ f(x) = any^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_1y' + a_0y = 0 $$

if $f(x) = 0$ then Hamgen,
if $f(x) \neq 0$ then NaHamgen,

---
$$ \f {\d y} {\d x} = \f {f(x)} {g(x)} \ra \d y g(y) = f(x)\d x $$
---
$$ y' = \f {y-x^2y}{x - y^2x} $$

$$ \f {\d y} {\d x} = \f {y-x^2y}{x - y^2x} $$

$$ \f {\d y(1-y^2)} {y} = \f {\d x(1-x^2)} {x} $$

$$ \int \ra \ln{|y|} - \f {y^2} 2 + G = \ln{|x|} - \f {x^2} 2 + C $$

---
Mesal
$$ y' = y^2 + 18xy + 81x^2 $$
$$ y' = (y+9x)^2 $$
$$ \f {\d y} {\d x} = (y+9x)^2 $$
$$ u = y + 9x $$
$$ \f {\d u} {\d x} = u^2 $$
$$ x = y + 9x $$
$$ \f {\d u} {\d x} = \f {\d y} {\d x} + 9 $$
$$ \f {\d u} {x^2 + 9} = \d x $$
$$ \int \ra \f 1 3 tan^{-1} \f {x} 3 = x + C $$
$$ \f 1 3 tan^{-1} \f {y+9x} 3 = x + C $$
---
$$ x \rightarrow \lambda x $$
$$ y \rightarrow \lambda y $$
$$ f(\lambda x, \lambda y) = \lambda^nf(x, y) $$
---
Mesal
$$ y' = \f {x+y} {x-y} $$
$$ x \rightarrow \lambda x $$
$$ y \rightarrow \lambda y $$

$$ y' = \f {\lambda x + \lambda y} {\lambda x - \lambda y} = \f {x+y} {x-y} $$
Hamgen

---
Mesal
$$ y' = \f {x+2} {x+y} $$
$$ x \rightarrow \lambda x $$
$$ y \rightarrow \lambda y $$
$$ y' = \f {\lambda x + 2} {\lambda x + \lambda y} = \f {\lambda (x + \f 2 \lambda)} {\lambda (x + y)} = \f {x+ \f 2 \lambda} {x+y} $$
Nahamgen

---

$$ x= \f y x $$
$$ y =ux \ra Moshtaq \ra \f {\d y} {\d x} = \f {\d ux} {\d x} $$
$$ \f {\d y} {\d x} = \f{\d x x}{\d x} + u \f {\d x} {\d x} = u'x + u $$
---

Mesal
$$ xy' = y(\ln y - \ln x + 1) $$
$$ xy' + y\ln x = y\ln y + y $$
$$ y' = \f y x (\ln {\f y x} + 1) $$
$$ x = \f y x , y' = u'x + u $$
$$ u'x + u = u(\ln u + 1) = u \ln u + u $$
$$ u'x = u(\ln u + 1) = u \ln u $$
$$ \f {\d u} {\d x} x = u \ln x $$
$$ \f {\d u} {u \ln u} = \f {\d x} x $$
$$ \int \ra \ln {(\ln u)} = \ln x + C $$
$$ \ln u = \f y x $$

---

$$ g(x) = a(x)y' + b(x)y $$

$$ 1y' = \f {b(x)} {a(x)} y = \f {g(x)} {a(x)}$$
$$ p(x) = \f {b(x)} {a(x)} $$
$$ q(x) = \f {g(x)} {a(x)} $$

$$ y' + p(x)y = q(x) $$

$$ M(x) = e $$

$$ (M(x)y)' = q(x)M(x) $$

---
Mesal

$$ ty' + (t+ 1)y = 2te^{-t} $$
$$ y(1) = a $$
$$ y' = \f {t+1} t y + 2e^{-t} $$
$$ y' = p(t)y + q(t) $$
$$ p(t) = \f {t+1} t $$
$$ q(t) = 2e^{-t} $$
$$ M(t) = e^{\int p(t) \d x} = e^{\int \f {t+1} t \d t} = e^{\ln t + t} = te^t $$
$$ (M(t)y)' = M(t)q(t) = (te^t y)' = te^t \times 2e^{-t} = 2t $$

$$ \int \ra te^t y = \int {2t \d t} = t^2 + C $$
$$ y = \f {t^2} {te^t} + \f {C} {te^t} $$
$$ y(1) = a \ra a = \f 1 e + \f C e \ra C = ae - 1 $$
$$ y = \f {t^2} {te^t} + \f {ae-1} {te^t} = \f {t} {e^t} + \f {ae-1} {te^t} $$

---

$$ \mu_x = e^{\int p(x) \d x} $$
$$ y = \f 1 {\mu_x} \int \mu_x q(x) \d x $$

---
Mesal
$$ y' + 2xy = xe^{-x^2} $$
$$ \mu_x = e^{\int 2x \d x} = e^{x^2} $$
$$ y = \f 1 {e^{x^2}} \int e^{x^2} xe^{-x^2} \d x = \f 1 {e^{x^2}} \int x \d x = \f 1 {e^{x^2}} \f {x^2} 2 + C $$

---
Mesal
$$ y' + 2y = 4x $$
$$ p(x) = 2 $$
$$ q(x) = 4x $$

$$ \mu_x = e^{\int 2 \d x} = e^{2x} $$
$$ y = \f 1 {e^{2x}} \int e^{2x} 4x \d x = \f 4 {e^{2x}} \int x e^{2x} \d x $$

$$ y = \f 4 {e^{2x}} (\f 1 2 x e^{2x} - \f 1 4 e^{2x} + C) $$

---

$$ y' + y = \cos x $$
$$ x' + x = \cos y $$

---

Mesal
$$ y' = \f 1 {x+y} $$
$$ y(0) = 0$$

$$ \f {\d y} {\d x} = \f 1 {x+y} $$

$$ \f {\d x} {\d y} = x + y $$

$$ x' = x + y \ra x' - x = y $$

$$ p(y) = -1 , q(y) = y $$
$$ \mu(y) = \mu_y = e^{\int p(y) \d y} = e^{\int - \d y} = e^{-y} $$

$$ (M(y)x)' = M(y)q(y) = (e^{-y}x)' = e^{-y}y $$

$$ \int \ra e^{-y}x = \int e^{-y}y \d y $$

$$ e^{-y}x = -e^{-y} - e^{-y} + C $$
$$ x = \f 1 {e^-y} (-e^{-y} - e^{-y} + C) $$
$$y(0) = 0 \ra 0 = \f 1 e ^ 0 (0 \times e^0 - e^0 + C) \ra C = 1 $$

---

#### جلسه 14 اسفند
### معادلات برنولی
$$ g(x) = a(x)y' + b(x)y $$
$$ g(x)y^ n = a(x)y' + b(x)y $$
$$ u  = y^{1-n} $$
---
Mesal
$$ yy' = 2x^3\cos {x^2} + \f {y^2} x $$
$$ y(\sqrt \pi) = 0 $$

$$ y' = 2x^3 y^{-1} \cos {x^2} + \f {y} x $$
$$ y' - \f y x = 2x^3 y^{-1} \cos {x^2} $$
$$ q(x) = 2x^3 \cos {x^2} $$

$$ u = y^{1 -n} = y^{1 - (-1)} = y^2 $$
$$ u' = 2y y' $$

$$ \f 1 2 u' = 2x^3 \cos {x^2} + \f u {x^{-1}} \ra \times 2 \ra u' - 2x^{-1}u = 4x^3 \cos {x^2} $$

$$ p(x) = -2x^{-1} $$
$$ q(x) = 4x^3 \cos {x^2} $$

$$ \mu_x = e^{\int p(x) \d x} = e^{\int -2x^{-1} \d x} = e^{-2\ln x} = \f 1 {x^2} $$

$$ (\f 1 {x^2} u)' = \f 1 {x^2} (4x^3 \cos {x^2}) = 4x \cos {x^2} $$

$$ \int \ra \f 1 {x^2} u = 2x \sin {x^2} + \cos {x^2} + C $$

$$ y^2 = 2x^3 \sin {x^2} + x^2 \cos {x^2} + Cx^2 $$

$$ y=0, x=\sqrt \pi \ra C = 1 $$

---

#### معادله ریکاتی
$$ y' + q_1(x)y + q_2(x)y^2 + q_3(x) = 0 $$

1. $$ if \quad q_2(x) = 0 \ra \quad y' + q_1(x)y + q_3(x) = 0 $$

2. $$ if \quad q_3(x) = 0 \ra \quad y' + q_1(x)y + q_2(x)y^2 = 0 $$

$$ y' + q_1(x)y = -q_2(x)y^2 $$

3. $$ if \quad q_2(x) \neq 0 \quad and \quad q_3(x) \neq 0 $$

$$ y=y_1 + \f 1 u $$

---

Mesal
$$ y_1 = - \f 1 x $$

$$ 1 + xy + x^3y^2 - x^3y' = 0 $$
$$ 1 + x(- \f 1 x) + x^3 (- \f 1 x)^2 - x^3(- \f 1 {x^2}) = 0 $$

$$ y = Y_1 + \f 1 u $$

$$ y = - \f 1 x + \f 1 u $$
$$ y' = \f 1 {x^2} - \f { u'} {u^2} $$

$$ 1 + x(- \f 1 x + \f 1 u) + x^3 (- \f 1 x + \f 1 u)^2 - x^3(- \f 1 {x^2} - \f { u'} {u^2}) = 0 $$

$$ \f x u + x + \f {x^3} u - \f {2x^2} u -x + \f {x^3u'} {u^2} = 0 $$

$$ \f 1 u (x-2x^2) + \f {x^3} u + \f {x^3u'} {u^2} = 0 $$

$$ \f 1 u (1-2x) + \f {x^2} u + \f {x^2u'} {u^2} = 0 $$

$$ u(1-2x) + x^2u + x^2u' = 0 $$

$$ u' = u \f {1-2x} {x^2} = -1 $$

$$ p(x) = \f {1-2x} {x^2} $$
$$ q(x) = -1 $$

$$ \mu_x = e^{\int p(x) \d x} = e^{\int \f {1} {x^2} - \f {2} {x} \d x} = x^{-2} e^{- \f 1 x} $$

$$ u = \f 1 {x^ {-2} e^{- \f 1 x}} (\int -x^{-2} e^{- \f 1 x} \d x) = x^2 e^{\f 1 x}  (-e^{-\f 1 x} + C) $$

$$ y=- \f 1 x + \f 1 {-x^2+cx^2e^{\f 1 x}} $$

---

### جلسه 21 اسفند

$$ M(x,y)\d x + N(x,y)\d y = 0 $$

$$ \f {\partial M} {\partial y} = \f {\partial N} {\partial x} $$

$$ \int M(x,y) \d x $$

---
Mesal
$$ (3x^2 -2xy + 2) \d x + (6y^2 - x^2 +3) \d y = 0 $$

$$ M = 3x^2 -2xy + 2 $$
$$ N = 6y^2 - x^2 +3 $$

$$ \f {\partial M} {\partial y} = -2x $$
$$ \f {\partial N} {\partial x} = -2x $$
$$ \f {\partial M} {\partial y} = \f {\partial N} {\partial x} $$

$$ \int M \d x = \int (3x^2 -2xy + 2) \d x = x^3 - x^2y + 2x $$

$$ N^* = 6y^2 + 3 $$

$$ \int N^* \d y = \int (6y^2 + 3) \d y = 2y^3 + 3y $$
$$ x^3-x^2y+2x + 2y^3 + 3y = C $$

---

$$ \f {\partial M} {\partial y} \neq \f {\partial N} {\partial x} $$

$$ \mu(x,y) = x^\alpha y^\beta $$
$$ \partial (\mu M) \partial y = \partial (\mu N) \partial x $$

$$ (2xy^3 + xy + x^2) \d y + (y^2 -xy) \d x = 0 $$

$$ (2x^{\alpha +1}y^{3 + \beta} + x^{\alpha +1}y^{\beta +1} + x^{\alpha +2} y^\beta) \d y + (x^{\alpha}y^{\beta +2} - x^{\alpha +1}y^{\beta + 1}) \d x = 0 $$

$$ N = 2x^{\alpha +1}y^{3 + \beta} + x^{\alpha +1}y^{\beta +1} + x^{\alpha +2} y^\beta $$
$$ M = x^{\alpha}y^{\beta +2} - x^{\alpha +1}y^{\beta + 1} $$

$$ \f {\partial M} {\partial y} = \f {\partial N} {\partial x} $$

$$ \f {\partial M} {\partial y} = (\beta + 2)x^{\alpha}y^{\beta +1} - (\beta + 1)x^{\alpha +1}y^{\beta} $$

$$ \f {\partial N} {\partial x} = 2(\alpha + 1)x^{\alpha}y^{3 + \beta} + (\alpha + 1)x^{\alpha +1}y^{\beta +1} + (\alpha + 2)x^{\alpha +1} y^\beta $$

$$ \alpha + 1 =0 \ra \alpha = -1 $$

$$ \beta + 2 = -1 + 1 = 0 \ra \beta = -2 $$

---

Tamrin

$$ \cos(x+y) \d x = x \sin (x+y) \d x + x \sin (x+y) \d y $$

---

$$ y'  = \f {y^2 - x^2} {2xy} $$
$$ - \f 1 {y'} = \f { y^2-x^2} {2xy} $$

$$ \f {\d y} {\d x} \leftarrow y' = \f {2xy} {x^2-y^2} $$

$$ 



