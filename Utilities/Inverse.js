function Inverse(base, num) {
    let euResult = ExtendedEuclid(base, num, 1, 0, 0, 1);
    if (euResult.gcd == 1) return euResult.t1;
    else return false;

    function ExtendedEuclid(r1, r2, s1, s2, t1, t2) {
        if (r2 == 0) {
            return {
                gcd: r1,
                t1: t1
            };
        }
        let q = Math.floor(r1 / r2), r = r1 % r2, s = (s1 - q * s2), t = (t1 - q * t2);
        return ExtendedEuclid(r2, r, s2, s, t2, t);
    }
}

module.exports = Inverse;