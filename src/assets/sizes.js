const sizes = {
    xs: {
        matches: (width) => {
            return (width < sizes.s.min);
        }
    },
    s: {
        matches: (width) => {
            return ((sizes.s.min <= width) && (width < sizes.m.min))
        },
        min: 576
    },
    m: {
        matches: (width) => {
            return ((sizes.m.min <= width) && (width < sizes.l.min))
        },
        min: 768
    },
    l: {
        matches: (width) => {
            return ((sizes.l.min <= width) && (width < sizes.xl.min));
        },
        min: 992
    },
    xl: {
        matches: (width) => {
            return (sizes.xl.min <= width);
        },
        min: 1200
    }
}

export default sizes;
