# جزوه
سلام
$$\DeclareMathOperator{\d}{d}$$
$$\DeclareMathOperator{\sech}{sech}$$
$$\DeclareMathOperator{\csch}{csch}$$


| تابع | مشتق |
|:---:|:---:|
| $a$ | $0$ |
| $e^x$ | $x'e^x$ |
| $\ln x$ | $\f {x'} x$ |
| $\sin x$ | $x'\cos x$ |
| $\cos x$ | $-x'\sin x$ |
| $\tan x$ | $x'\sec^2x$ |
| $\cot x$ | $-x \csc^2 x$ |
| $\sec x$ | $x'\sec x \tan x$ |
| $\csc x$ | $-x'\csc x \cot x$ |
| $\sin^{-1}x$ | $\f {x'} {\sqrt{1-x^2}}$ |
| $\cos^{-1}x$ | $-\f {x'} {\sqrt{1-x^2}}$ |
| $\tan^{-1}x$ | $\f {x'} {1+x^2}$ |
| $\cot^{-1}x$ | $-\f {x'} {1+x^2}$ |
| $\sec^{-1}x$ | $\f {x'} {\|x\| \sqrt{x^2-1}}$ |
| $\csc^{-1}x$ | $-\f{x'}{\|x\|\sqrt{x^2-1}}$ |
| $x^n$ | $xx'x^{n-1}$ |
| $a^x$ | $x'a^x\ln a$ |
| $\log_a x$ | $\f {x'}{x\ln a}$ |
| $\sinh x$ | $x'\cosh x$ |
| $\cosh x$ | $x' \sinh x$ |
| $\tanh x$ | $x'\sech ^2 x$ |
| $\coth x$ | $-x'\csch^2 x$ |
| $\sech x$ | $-x' \sech x \tanh x$ |
| $\csch x$ | $-x' \csch x \coth x$ |
| $\sinh^{-1}x$ | $\f {x'} {\sqrt {x^2+1}}$ |
| $\cosh^{-1}x$ | $\f {x'} {\sqrt {x^2-1}}$ |
| $\tanh^{-1}x$ | $\f {x'} {\sqrt {1-x^2}}$ |
| $\coth^{-1}x$ | $\f {x'} {\sqrt {1-x^2}}$ |
| $\sech^{-1}x$ | $\f {x'} {\|x\|\sqrt {1-x^2}}$ |
| $\csch^{-1}x$ | $\f {x'} {\|x\|\sqrt {1+x^2}}$ |

### انتگرال مثلثات

<!-- | تابع | مشتق |
|:---:|:---:|
| | $$ |
| $$ | $$ |
| $$ | $$ |
| $$ | $$ |
| $$ | $$ | -->

$$ \sin^2x + \cos^2x=1 $$
$$ 1+\tan^2x=\sec^2x $$
$$ 1+\cot^2x=\ccc^2x $$
$$ \sin^2x=\f {1-\cos^2x} 2 $$
$$ \cos^2x=\f {1+\cos x} 2 $$
$$ \sin^2 x = 2\sin x \cos x $$
$$ \cos^2 x = \cos^2 x - \sin ^2 x = 2\cos^2 x -1 = 1-2\sin^2 x $$
$$ \sin(A\pm B) = \sin A \cos B \pm \sin B \cos A $$
$$ \cos(A \pm B) = \cos A \cos B \mp \sin A \sin B $$
$$ \sin A \sin B = \f {\cos (A-B) - \cos (A+B)} 2 $$
$$ \cos A \cos B = \f { \cos (A+B) + \cos (A-B)} 2 $$
$$ \sin A \cos B = \f {\sin(A+B)+\sin(A-B)} 2 $$
$$ \sin A + \sin B = 2\sin {\f {A+B} 2} - \cos{\f {A-B} 2} $$
$$ \sin A - \sin B = 2\sin {\f {A-B} 2} - \cos{\f {A+ B} 2} $$
$$ \cos A + \cos B = 2\cos {\f {A+B} 2} - \cos {\f {A-B} 2} $$
$$ \cos A - \cos B = -2\sin {\f {A+B} 2} \sin {\f {A-B} 2} $$
$$ \cosh^2 x - \sinh^2 x = 1 $$
$$ 1 + \tanh^2 x = \sech^2 x $$
$$ \coth^2 x - 1 = \csch^2 x $$
$$ \sinh^2 x = \f {\cosh^2 x -1} 2 $$
$$ \cosh^2 x = \f {\cosh^2 x +1} 2 $$
$$ \sinh {2x} = 2\sinh x \cosh x $$
$$ \cosh {2x} = \cosh^2 x + \sinh^2 x = 2\cosh^2 x -1 = 1+2\sinh^2 x $$


### معادله‌های دیفرانسیل
$$ \d(xy) = x\d y + y\d x $$
$$ \d \f y x = \f {x\d y - y\d x} {x^2} $$

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
$$ \int =>






---
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
$$  $$
