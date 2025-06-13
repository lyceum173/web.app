export const formatText = (text) => {
    try {
      return (
        text
        .replace(/img\(([^)]+)\)/g, (_, url) => `[[IMAGE:${url}]]`)
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")  // Bold
        .replace(/\*(.*?)\*/g, "<em>$1</em>")              // Italic
        .replace(/==(.*?)==/g, "<u>$1</u>")                // Underline
        .replace(/~~(.*?)~~/g, "<del>$1</del>")            // Strikethrough
        .replace(/_{3,}/g, '<span>_______</span>') // Blanks
      
          .replace(/sqrt\(([^)]+)\)/g, "√$1")
          .replace(/root\((\d+),\s*([^)]+)\)/g, "<sup>$1</sup>√$2")
          .replace(/\\t/g, "&emsp;")
          .replace(/\\n/g, "<br>")
    
          .replace(/:alpha/g, "&alpha;")
          .replace(/:beta/g, "&beta;")
          .replace(/:gamma/g, "&gamma;")
          .replace(/:delta/g, "&delta;")
          .replace(/:epsilon/g, "&epsilon;")
          .replace(/:zeta/g, "&zeta;")
          .replace(/:eta/g, "&eta;")
          .replace(/:theta/g, "&theta;")
          .replace(/:lambda/g, "&lambda;")
          .replace(/:mu/g, "&mu;")
          .replace(/:pi/g, "&pi;")
          .replace(/:rho/g, "&rho;")
          .replace(/:sigma/g, "&sigma;")
          .replace(/:tau/g, "&tau;")
          .replace(/:phi/g, "&phi;")
          .replace(/:omega/g, "&omega;")
          .replace(
            /\[\[IMAGE:([^\]]+)\]\]/g,
            "<img src='$1' alt='answer' class='answer-img'/>"
          )
    
          // .replace(/(\w)\^(\w+)/g, "$1<sup>$2</sup>")
          // .replace(/(\w)_(\w+)/g, "$1<sub>$2</sub>")
    
          // .replace(
          //   /int\(([^,]+),\s*([^,]+),\s*([^)]+)\)/g,
          //   "∫<sub>$2</sub><sup>$3</sup>$1"
          // )
          // .replace(/int\(([^)]+)\)/g, "∫$1")
          // // 7. Дроби — ВЖЕ після коренів
          .replace(
            /frac\(([^,]+),\s*([^)]+)\)/g,
            '<span class="fraction"><span class="top">$1</span><span class="bottom">$2</span></span>'
          )
      );
    } catch {
      return text
    }
   
  };
  export const formatAnswerText = (text) => {
    return (
      text
        .replace(/img\(([^)]+)\)/g, (_, url) => `[[IMAGE:${url}]]`)
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/==(.*?)==/g, "<u>$1</u>")                // Underline
        .replace(/~~(.*?)~~/g, "<del>$1</del>")   
        .replace(
          /\[\[IMAGE:([^\]]+)\]\]/g,
          "<img src='$1' alt='answer' class='answer-img'/>"
        )
    );
  };
  