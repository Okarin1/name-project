// 判断字符是否为英文字母
const isEnglishLetter = char => /[a-zA-Z]/.test(char);

// 计算实际占用的位置数（英文字母占0.5，其他字符占1）
const calculateLength = chars => {
    return chars.reduce((acc, char) => {
        // 只有英文字母特殊处理为0.5位置，其他所有字符（包括中文、特殊符号、其他语言文字等）都占1个位置
        return acc + (isEnglishLetter(char) ? 0.5 : 1);
    }, 0);
};

const permutation = (data) => {
    // 先计算总长度
    const totalLength = calculateLength(data);
    if (totalLength > 6) return [];

    const used = [];
    const n = data.length;
    const ans = [];
    
    const Impl = (i, remainingSlots) => {
        if (i === n || remainingSlots <= 0) {
            const cand = [];
            let currentLength = 0;
            
            // 构建当前组合
            for (let j = 0; j < n; ++j) {
                if (used[j]) {
                    cand.push(...Array.from({ length: used[j] }).fill("⁠"));
                    currentLength += used[j];
                }
                cand.push(data[j]);
                currentLength += isEnglishLetter(data[j]) ? 0.5 : 1;
            }
            
            // 检查长度是否合法
            if (cand.length && currentLength <= 6) {
                ans.push(cand);
            }
            
            // 添加剩余的空白符号
            if (remainingSlots > 0) {
                for (let k = 1; k <= remainingSlots && (currentLength + k) <= 6; ++k) {
                    ans.push([...cand, ...Array.from({ length: k }).fill("⁠")]);
                }
            }
            return;
        }
        
        // 计算当前位置可以添加的最大空白符号数
        const charLength = isEnglishLetter(data[i]) ? 0.5 : 1;
        const maxBlanks = Math.floor(remainingSlots);
        
        for (let k = 0; k <= maxBlanks; ++k) {
            used[i] = k;
            Impl(i + 1, remainingSlots - k);
            used[i] = 0;
        }
    };
    
    Impl(0, 6 - totalLength);
    return ans;
};

export function toWord(words) {
    return permutation(words.split('')).sort((a, b) => {
        const lenA = calculateLength(a);
        const lenB = calculateLength(b);
        return lenA - lenB;
    }).map(res => res.join(''));
}
