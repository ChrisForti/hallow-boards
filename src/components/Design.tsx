function Design() {
  return (
    <div className="flex justify-center py-4 px-6">
      <div className="group relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 max-w-md shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl font-bold text-white">Proven Designs</h3>
          </div>
          <p className="text-base text-gray-200 leading-relaxed">
            Choose from a curated collection of designs that have been already
            proven to work. Collaborate with confidence using battle-tested
            layouts.
          </p>

          {/* Optional CTA button */}
          <button className="mt-4 px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-purple-500/50">
            Explore Designs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Design;
