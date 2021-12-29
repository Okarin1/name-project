const permutation = (data) => {
    if (data.length >= 6)
        return [];
    const used = [];
    const n = data.length;
    const ans = [];
    const Impl = (i, remaining) => {
        if (i === n || remaining === 0) {
            const cand = [];
            for (let i = 0; i < n; ++i) {
                if (used[i]) {
                    cand.push(...Array.from({ length: used[i] }).fill("⁠"));
                }
                cand.push(data[i]);
            }
            if (cand.length) {
                ans.push(cand);
            }
            if (remaining) {
                for (let k = 1; k <= remaining; ++k) {
                    ans.push([...cand, ...Array.from({ length: k }).fill("⁠")]);
                }
            }
            return;
        }
        for (let k = 0; k <= remaining; ++k) {
            used[i] = k;
            Impl(i + 1, remaining - k);
            used[i] = 0;
        }
    };
    Impl(0, 6 - n);
    return ans;
};

export function toWord(words){
      return permutation(words.split('')).sort((a, b) => a.length - b.length).map(res=>(res.join('')))
  }
