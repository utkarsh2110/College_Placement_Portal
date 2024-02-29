function LatexGen(data) {
    const { CVdetails, intern, project, certi, acad, por, extraCurr } = data

    const projectSection = project && project.map(element => 
    `\\textbf{${element.title}}
    \\hfill {${element.duration} months}
    \\begin{innerlist}
    \\item {${element.desc}}
    \\end{innerlist}
    \\vspace{0.4cm}`
    ).join('')


    const internshipSection = intern && intern.map(element => `
    \\textbf{${element.role}},
    {${element.company}}
    \\hfill {${element.duration} months}
    \\begin{innerlist}
    \\item {${element.desc}}
    \\end{innerlist}`
    )

    const certificationSection = certi && certi.map(element => `
    \\item {${element.title}}
    \\hfill {${element.year}}`
    )

    const porSection = por && por.map(element => `
    \\textbf{${element.title}},
    \\hfill {${element.year}}
    \\begin{innerlist}
    \\item {${element.desc}}
    \\end{innerlist}`
    )

    const extraCurrSection = extraCurr && extraCurr.map(element => `
    \\item {${element.title}}
    \\hfill {${element.year}}`
    )

    const academicSection = acad && acad.map(element => `
    \\item {${element.title}}
    \\hfill {${element.year}}`
    )

    const latexFormat = 
    `\\documentclass[a4paper,11pt]{article}
      \\RequirePackage[T1]{fontenc}
    
    \\usepackage{times}
    \\usepackage{calc}
    \\usepackage[shortcuts]{extdash}
    \\usepackage{amsmath}
    
    \\usepackage{graphicx} 
    
    \\reversemarginpar
    
    \\usepackage[paper=letterpaper,
                marginparwidth=1.1in,     % Length of section titles
                marginparsep=.075in,       % Space between titles and text
                margin=0.5in,               % 1 inch margins
                tmargin=0.65in,
                includemp]{geometry}
    
    \\setlength{\\parindent}{0in}
    
    \\usepackage[shortlabels]{enumitem}
    
    \\makeatletter
    \\newlength{\\bibhang}
    \\setlength{\\bibhang}{0em}
    \\newlength{\\bibsep}
     {\\@listi \\global\\bibsep\\itemsep \\global\\advance\\bibsep by\\parsep}
    \\newlist{bibsection}{itemize}{3}
    \\setlist[bibsection]{label=,leftmargin=\\bibhang,%
            itemindent=-\\bibhang,
            itemsep=\\bibsep,parsep=\\z@,partopsep=0pt,
            topsep=0pt}
    \\newlist{bibenum}{enumerate}{3}
    \\setlist[bibenum]{label=[\\arabic*],resume,leftmargin={\\bibhang+\\widthof{[999]}},%
            itemindent=-\\bibhang,
            itemsep=0.05in,parsep=\\z@,partopsep=0pt,
            topsep=0pt}
    \\let\\oldendbibenum\\endbibenum
    \\def\\endbibenum{\\oldendbibenum\\vspace{-.6\\baselineskip}}
    \\let\\oldendbibsection\\endbibsection
    \\def\\endbibsection{\\oldendbibsection\\vspace{-.6\\baselineskip}}
    \\makeatother
    
    \\usepackage{fancyhdr,lastpage}
    \\pagestyle{fancy}
    \\pagestyle{empty}      % Uncomment this to get rid of page numbers
    \\fancyhf{}\\renewcommand{\\headrulewidth}{0pt}
    \\fancyfootoffset{\\marginparsep+\\marginparwidth}
    \\newlength{\\footpageshift}
    \\setlength{\\footpageshift}
              {0.5\\textwidth+0.5\\marginparsep+0.5\\marginparwidth-2in}
    \\lfoot{\\hspace{\\footpageshift}%
           \\parbox{4in}{\\, \\hfill %
                        \\arabic{page} of \\protect\\pageref*{LastPage} % +LP
    %                    \\arabic{page}                               % -LP
                        \\hfill \\,}}
    
    \\usepackage{color,hyperref}
    \\definecolor{darkblue}{rgb}{0.0,0.0,1}
    \\hypersetup{colorlinks,breaklinks,
                linkcolor=darkblue,urlcolor=darkblue,
                anchorcolor=darkblue,citecolor=darkblue}
    
    \\renewcommand{\\section}[1]{\\pagebreak[3]%
        \\vspace{1.3\\baselineskip}%
        \\phantomsection\\addcontentsline{toc}{section}{#1}%
        \\noindent\\llap{\\scshape\\smash{\\parbox[t]{\\marginparwidth}{\\hyphenpenalty=10000\\raggedright #1}}}%
        \\vspace{-\\baselineskip}\\par}
    
    \\newcommand*\\fixendlist[1]{%
        \\expandafter\\let\\csname preFixEndListend#1\\expandafter\\endcsname\\csname end#1\\endcsname
        \\expandafter\\def\\csname end#1\\endcsname{\\csname preFixEndListend#1\\endcsname\\vspace{-0.6\\baselineskip}}}
    
    \\let\\originalItem\\item
    \\newcommand*\\fixouterlist[1]{%
        \\expandafter\\let\\csname preFixOuterList#1\\expandafter\\endcsname\\csname #1\\endcsname
        \\expandafter\\def\\csname #1\\endcsname{\\let\\oldItem\\item\\def\\item{\\pagebreak[2]\\oldItem}\\csname preFixOuterList#1\\endcsname}
        \\expandafter\\let\\csname preFixOuterListend#1\\expandafter\\endcsname\\csname end#1\\endcsname
        \\expandafter\\def\\csname end#1\\endcsname{\\let\\item\\oldItem\\csname preFixOuterListend#1\\endcsname}}
    \\newcommand*\\fixinnerlist[1]{%
        \\expandafter\\let\\csname preFixInnerList#1\\expandafter\\endcsname\\csname #1\\endcsname
        \\expandafter\\def\\csname #1\\endcsname{\\let\\oldItem\\item\\let\\item\\originalItem\\csname preFixInnerList#1\\endcsname}
        \\expandafter\\let\\csname preFixInnerListend#1\\expandafter\\endcsname\\csname end#1\\endcsname
        \\expandafter\\def\\csname end#1\\endcsname{\\csname preFixInnerListend#1\\endcsname\\let\\item\\oldItem}}
    
    \\newlist{outerlist}{itemize}{3}
        \\setlist[outerlist]{label=\\enskip\\textbullet,leftmargin=*}
        \\fixendlist{outerlist}
        \\fixouterlist{outerlist}
    
    \\newlist{lonelist}{itemize}{3}
        \\setlist[lonelist]{label=\\enskip\\textbullet,leftmargin=*,partopsep=0pt,topsep=0pt}
        \\fixendlist{lonelist}
        \\fixouterlist{lonelist}
    
    \\newlist{innerlist}{itemize}{3}
        \\setlist[innerlist]{label=\\enskip\\textbullet,leftmargin=*,parsep=0pt,itemsep=0pt,topsep=0pt,partopsep=0pt}
        \\fixinnerlist{innerlist}
    
    \\newlist{loneinnerlist}{itemize}{3}
        \\setlist[loneinnerlist]{label=\\enskip\\textbullet,leftmargin=*,parsep=0pt,itemsep=0pt,topsep=0pt,partopsep=0pt}
        \\fixendlist{loneinnerlist}
        \\fixinnerlist{loneinnerlist}
    
    \\newcommand{\\blankline}{\\quad\\pagebreak[3]}
    \\newcommand{\\halfblankline}{\\quad\\vspace{-0.5\\baselineskip}\\pagebreak[3]}
    
    \\usepackage{doi}
    \\usepackage{url}
    
    
    \\urlstyle{same}
    \\providecommand*\\emaillink[1]{\\nolinkurl{#1}}
    \\providecommand*\\email[1]{\\href{mailto:#1}{\\emaillink{#1}}}`


    const heading = 
    `\\begin{document}
    {\\hspace*{-\\marginparsep minus \\marginparwidth}%
   \\begin{minipage}[t]{\\textwidth+\\marginparwidth+\\marginparsep}%
   \\centering
   {\\LARGE \\bfseries {${CVdetails.name}}}\\\\ 
   \\vspace{0.5cm} 
   \\href{https://www.linkedin.com/in/${CVdetails.linkedin}}{LinkedIn}  \\hspace{1cm}
   \\href{mailto:${CVdetails.email}}{Email}\\hspace{1cm}
   \\text{+91 ${CVdetails.contact}} \\hspace{1cm}
   \\href{https://github.com/${CVdetails.github}}{GitHub}
   
   \\rule{\\columnwidth}{1.2pt}
   
   \\vspace{0.2cm}
   \\end{minipage}}
   
   
   

    \\vspace{0.2cm}
   
   \\section{Education}
   
   \\textbf{${CVdetails.specialisation}},
   \\href{https://www.nmims.edu/}{NMIMS University} \\hfill {${CVdetails.gradYear}}
   \\\\ CGPA: ${CVdetails.gpa} \\`


    const experience = `
    \\section{Experience}
    ${internshipSection}`

    const projects = `\\section{Projects}
                        ${projectSection}
                        `

    const TechnicalSkills =
        `\\section{Technical Skills}

    \\textbf{Programming Languages:}
    {${CVdetails.lang}}
    
    \\textbf{Tools/Frameworks/Softwares:}
    {${CVdetails.tools}}

    `
    const certis = `
    \\section{Certifications}
    \\begin{innerlist}
    ${certificationSection}
    \\end{innerlist}
    `

    const pors = `
    \\section{Leadership}
    \\vspace{0.1cm}
    ${porSection}
    \\vspace{0.2cm}

    `


    const latex =
        `
     ${latexFormat} 
     ${heading} 
     ${experience} 
     ${projects} 
     ${TechnicalSkills} 
     ${certi.length>0 && certis} 
     ${extraCurr.length>0 && extraCurr} 
     ${acad.length>0 && acad} 
     ${por.length > 0 && pors}    
     \\end{document}
    `;

    return latex;
    
   
}


module.exports = LatexGen;