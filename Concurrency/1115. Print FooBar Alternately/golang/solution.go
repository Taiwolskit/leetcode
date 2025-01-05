type FooBar struct {
	n       int
	fooTurn chan struct{}
	barTurn chan struct{}
}

func NewFooBar(n int) *FooBar {
	fb := &FooBar{
		n:       n,
		fooTurn: make(chan struct{}, 1),
		barTurn: make(chan struct{}),
	}
	fb.fooTurn <- struct{}{} // 初始允許 foo 先執行
	return fb
}

func (fb *FooBar) Foo(printFoo func()) {
	for i := 0; i < fb.n; i++ {
		<-fb.fooTurn // 等待輪到 foo
		printFoo()
		fb.barTurn <- struct{}{} // 通知 bar 可以執行
	}
}

func (fb *FooBar) Bar(printBar func()) {
	for i := 0; i < fb.n; i++ {
		<-fb.barTurn // 等待輪到 bar
		printBar()
		fb.fooTurn <- struct{}{} // 通知 foo 可以執行
	}
}