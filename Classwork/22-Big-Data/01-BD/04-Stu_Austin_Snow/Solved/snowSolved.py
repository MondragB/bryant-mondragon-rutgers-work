from mrjob.job import MRJob


class Snow_Days(MRJob):

    def mapper(self, key, line):
        (station, name, state, date, snow, tmax, tmin) = line.split(",")
        if 'AUSTIN' in name and snow and float(snow) > 0:
            yield name, 1

    def reducer(self, name, snow):
        yield name, max(snow)


if __name__ == "__main__":
    Snow_Days.run()
