/*
Design Patterns ou padrões de projetos são soluções generalistas para problemas
recorrentes durante o desenvolvimento de um software. Não se trata de uma framework ou um 
código pronto, mas de uma definição de alto nível de como um problema comum pode ser 
solucionado.

Formato de um pattern
-Nome
-Exemplo
-Contexto
-Problema
-Solução

Padrões de criação
Os padrões de criação são aqueles que abstraem e/ou adiam o processo 
criação dos objetos. Eles ajudam a tornar um sistema independente de como
seus objetos são criados, compostos e representados.
-Abstract Factory
-Builder
-Factory Method
-Prototype
-Singleton

Padrões Estruturais
Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para 
formar estruturas maiores.
-Adapter
-Bridge
-Composite
-Decorator
-Facade
Business Delegate
-Flyweight
-Proxy

Padrões Comportamentais
Os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades 
entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os
padrões de comunicação entre os objetos.
-Chain of Responsibility
-Command
-Interpreter
-Iterator
-Mediator
-Observer
-State
-Strategy
-Template Method
-Visitor

Patterns mais utilizados
-Factory: Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new,
são consideradas funções Factory(fábrica).

-Singleton: O objetivo desse pattern é criar uma única instancia de uma função construtora e
retorná-la toda vez em que for necessário utilizá-la.

-Decorator: Uma função decorator recebe uma outra função como parametro e estende o seu
comportamento sem modificá-la explicitamente.

-Observer: É um pattern muito popular em aplicações javascript. A instância (subscriber) 
mantém uma coleção de objetos (observers) e notifica todos eles quanto ocorrem mudanças
no estado.

-Module: É um pattern que possibilita organizarmos melhor o nosso código, sem a
necessidade de expor variáveis globais.
*/