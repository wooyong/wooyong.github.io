
var linkUrlDictionary = {
    "paper_jmp":"https://wooyong.github.io/data/papers/dynamicCRC.pdf",
    "paper_pub":"https://doi.org/10.1007/s11203-016-9141-5",
    "package_optpoly":"https://github.com/wooyong/optpoly",
    "package_mvInterp":"https://github.com/wooyong/mvInterp",
    "tutorial_r":"https://github.com/wooyong/rtutorial",
    "cv":"https://wooyong.github.io/data/cv/CV-wooyong.pdf"
}

function openLink(keyword) {
    window.open(linkUrlDictionary[keyword],'_blank');
}