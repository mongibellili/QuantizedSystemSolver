var documenterSearchIndex = {"docs":
[{"location":"examples/","page":"Examples","title":"Examples","text":"odeprob = NLodeProblem(quote\n    name=(sysb1,)\n    u = [-1.0, -2.0]\n    du[1] = -2.0\n    du[2] =1.24*u[1]-0.01*u[2]+0.2\nend)  \ntspan=(0.0,1.0)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"sol=solve(odeprob,qss1(),tspan)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"sol=solve(odeprob,qss2(),tspan)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"sol=solve(odeprob,liqss1(),tspan)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"sol=solve(odeprob,liqss2(),tspan)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"sol=solve(odeprob,nmliqss1(),tspan)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"sol=solve(odeprob,nmliqss2(),tspan)","category":"page"},{"location":"Taylor0/#Taylor0","page":"Taylor Object","title":"Taylor0","text":"","category":"section"},{"location":"Problem/#Problem","page":"QSS Problem","title":"Problem","text":"","category":"section"},{"location":"Problem/#Problem-title-level2","page":"QSS Problem","title":"Problem title level2","text":"","category":"section"},{"location":"Problem/#Problem-title-level3","page":"QSS Problem","title":"Problem title level3","text":"","category":"section"},{"location":"Algorithm/#Algorithms","page":"Algorithms","title":"Algorithms","text":"","category":"section"},{"location":"Algorithm/#Functions","page":"Algorithms","title":"Functions","text":"","category":"section"},{"location":"Algorithm/","page":"Algorithms","title":"Algorithms","text":" qss1()  ","category":"page"},{"location":"Algorithm/#QuantizedSystemSolver.qss1-Tuple{}","page":"Algorithms","title":"QuantizedSystemSolver.qss1","text":"qss1() calls the explicit quantized state system solver with order 1\n\n\n\n\n\n","category":"method"},{"location":"Algorithm/","page":"Algorithms","title":"Algorithms","text":" qss2()  ","category":"page"},{"location":"Algorithm/#QuantizedSystemSolver.qss2-Tuple{}","page":"Algorithms","title":"QuantizedSystemSolver.qss2","text":"qss2() calls the explicit quantized state system solver with order 2\n\n\n\n\n\n","category":"method"},{"location":"Algorithm/","page":"Algorithms","title":"Algorithms","text":" qss3()  ","category":"page"},{"location":"Algorithm/#QuantizedSystemSolver.qss3-Tuple{}","page":"Algorithms","title":"QuantizedSystemSolver.qss3","text":"qss3() calls the explicit quantized state system solver with order 3\n\n\n\n\n\n","category":"method"},{"location":"Algorithm/","page":"Algorithms","title":"Algorithms","text":" liqss1()  ","category":"page"},{"location":"Algorithm/#QuantizedSystemSolver.liqss1-Tuple{}","page":"Algorithms","title":"QuantizedSystemSolver.liqss1","text":"liqss1() calls the  imlicit quantized state system solver with order 1\n\n\n\n\n\n","category":"method"},{"location":"Algorithm/","page":"Algorithms","title":"Algorithms","text":" liqss2()  ","category":"page"},{"location":"Algorithm/#QuantizedSystemSolver.liqss2-Tuple{}","page":"Algorithms","title":"QuantizedSystemSolver.liqss2","text":"liqss2() calls the  imlicit quantized state system solver with order 2\n\n\n\n\n\n","category":"method"},{"location":"Algorithm/","page":"Algorithms","title":"Algorithms","text":" liqss3()  ","category":"page"},{"location":"Algorithm/#QuantizedSystemSolver.liqss3-Tuple{}","page":"Algorithms","title":"QuantizedSystemSolver.liqss3","text":"liqss3() calls the  imlicit quantized state system solver with order 3\n\n\n\n\n\n","category":"method"},{"location":"Algorithm/","page":"Algorithms","title":"Algorithms","text":" nmliqss1()  ","category":"page"},{"location":"Algorithm/#QuantizedSystemSolver.nmliqss1-Tuple{}","page":"Algorithms","title":"QuantizedSystemSolver.nmliqss1","text":"nmliqss1() calls the modified imlicit quantized state system solver with order 1\n\n\n\n\n\n","category":"method"},{"location":"Algorithm/","page":"Algorithms","title":"Algorithms","text":" nmliqss2()  ","category":"page"},{"location":"Algorithm/#QuantizedSystemSolver.nmliqss2-Tuple{}","page":"Algorithms","title":"QuantizedSystemSolver.nmliqss2","text":"nmliqss2() calls the modified imlicit quantized state system solver with order 2\n\n\n\n\n\n","category":"method"},{"location":"Algorithm/","page":"Algorithms","title":"Algorithms","text":" nmliqss3()  ","category":"page"},{"location":"Algorithm/#QuantizedSystemSolver.nmliqss3-Tuple{}","page":"Algorithms","title":"QuantizedSystemSolver.nmliqss3","text":"nmliqss3() calls the modified imlicit quantized state system solver with order 3\n\n\n\n\n\n","category":"method"},{"location":"#Quantized-System-Solver","page":"Home","title":"Quantized System Solver","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"Taylor0.md\", \"Problem.md\",\"Algorithm.md\",\"examples.md\"]\nDepth = 1","category":"page"},{"location":"#Algorithms:","page":"Home","title":"Algorithms:","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"qss1(),qss2()","category":"page"},{"location":"","page":"Home","title":"Home","text":" solve(prob::NLODEProblem{PRTYPE,T,Z,D,CS},tspan::Tuple{Float64, Float64};sparsity::Val{Sparsity}=Val(false)::Float64,saveat=1e-9::Float64::Float64,abstol=1e-4::Float64,reltol=1e-3::Float64,maxErr=Inf::Float64) where {PRTYPE,T,Z,D,CS,Sparsity}    ","category":"page"},{"location":"#QuantizedSystemSolver.solve-Union{Tuple{Sparsity}, Tuple{CS}, Tuple{D}, Tuple{Z}, Tuple{T}, Tuple{PRTYPE}, Tuple{NLODEProblem{PRTYPE, T, Z, D, CS}, Tuple{Float64, Float64}}} where {PRTYPE, T, Z, D, CS, Sparsity}","page":"Home","title":"QuantizedSystemSolver.solve","text":"solve(prob::NLODEProblem{PRTYPE,T,Z,D,CS},tspan::Tuple{Float64, Float64};sparsity::Val{Sparsity}=Val(false)::Float64,saveat=1e-9::Float64::Float64,abstol=1e-4::Float64,reltol=1e-3::Float64,maxErr=Inf::Float64) where {PRTYPE,T,Z,D,CS,Sparsity}    \n\ndispatches on a specific integrator based on the algorithm provided. After the simulation, the solution is returned as a Solution object.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"back to top Quantized System Solver","category":"page"}]
}
